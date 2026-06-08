/***********************************************************
 * VIDEO ANALYTICS UTILITY (HTML5 + YouTube)
 ***********************************************************/

(function (window) {
    window.adobeDataLayer = window.adobeDataLayer || [];

    /***********************
     * NORMALIZATION
     ***********************/
    function normalize(value) {
        if (typeof value === "string") {
            return value
                .toLowerCase()
                .replace(/<[^>]*>?/gm, "")
                .substring(0, 100);
        }
        return value;
    }

    function percentPlayed(current, duration) {
        if (!duration) return 0;
        return Number(((current / duration) * 100).toFixed(1));
    }

    /***********************
     * CORE PUSH FUNCTION
     ***********************/
    function pushEvent(eventName, trigger, video) {
        console.log('Pushing event:', eventName, trigger, video); // Debug log
        window.queueAdobeEvent({
            event: normalize(eventName),
            data: {
                event_trigger: normalize(trigger),
                video: {
                    id: normalize(video.id),
                    title: normalize(video.title),
                    duration: video.duration,
                    current_time: video.currentTime,
                    percent_played: percentPlayed(video.currentTime, video.duration),
                    autoplay: video.autoplay,
                    muted: video.muted,
                    volume: video.volume,
                    stream_type: normalize(video.streamType || "vod"),
                    content_type: normalize(video.contentType || "content"),
                    player_name: normalize(video.playerName),
                    format: normalize(video.format)
                }
            }
        });
    }

    /***********************
     * HTML5 VIDEO TRACKING
     ***********************/
    function trackHTML5Video(videoEl, config = {}) {
        let hasStarted = false;
        let milestones = new Set();
        let lastTime = 0;

        function getVideoSource() {
            return (
                videoEl.currentSrc ||
                videoEl.src ||
                videoEl.querySelector("source")?.src ||
                ""
            );
        }

        function detectFormat() {
            // allow override first (always best)
            if (config.format) return config.format.toLowerCase();

            let src = getVideoSource();

            if (!src) return;

            // handle blob URLs (cannot extract format)
            if (src.startsWith("blob:")) {
                return config.format; // fallback only
            }

            try {
                // remove query params + hash
                const cleanUrl = src.split("?")[0].split("#")[0];

                // extract extension
                const match = cleanUrl.match(/\.([a-z0-9]+)$/i);

                if (!match) return;

                return match[1].toLowerCase();

            } catch (e) {
                return;
            }
        }

        function getVideoFilename() {
            let src = getVideoSource();
            if (!src || src.startsWith("blob:")) return null;

            try {
                // remove query params + hash
                const cleanUrl = src.split("?")[0].split("#")[0];
                // extract filename (part after last /)
                const filename = cleanUrl.split("/").pop();
                return filename || null;
            } catch (e) {
                return null;
            }
        }

        function getMeta() {
            return {
                id: config.id || getVideoFilename() || videoEl.title || "unknown",
                title: config.title || videoEl.title || document.title,
                duration: videoEl.duration || 0,
                currentTime: videoEl.currentTime || 0,
                autoplay: videoEl.autoplay,
                muted: videoEl.muted,
                volume: Math.round(videoEl.volume * 100),
                playerName: "HTML5",
                format: detectFormat()
            };
        }

        videoEl.addEventListener("loadedmetadata", () => {
            pushEvent("video_load", "system", getMeta());
        });

        videoEl.addEventListener("play", () => {
            const meta = getMeta();

            if (!hasStarted) {
                hasStarted = true;
                pushEvent("video_start", meta.autoplay ? "autoplay" : "user_action", meta);
            }

            pushEvent("video_play", "user_action", meta);
        });

        videoEl.addEventListener("pause", () => {
            if (videoEl.ended) return;
            pushEvent("video_pause", "user_action", getMeta());
        });

        videoEl.addEventListener("waiting", () => {
            pushEvent("video_buffer_start", "system", getMeta());
        });

        videoEl.addEventListener("playing", () => {
            pushEvent("video_buffer_end", "system", getMeta());
        });

        videoEl.addEventListener("seeked", () => {
            pushEvent("video_seek", "user_action", getMeta());
        });

        videoEl.addEventListener("ended", () => {
            pushEvent("video_complete", "complete", getMeta());
        });

        videoEl.addEventListener("timeupdate", () => {
            const meta = getMeta();

            // milestones (10%)
            const milestone = Math.floor(percentPlayed(meta.currentTime, meta.duration) / 10) * 10;

            if (milestone > 0 && milestone <= 100 && !milestones.has(milestone)) {
                milestones.add(milestone);
                pushEvent("video_milestone", "milestone", meta);
            }

            // seek fallback detection
            if (Math.abs(meta.currentTime - lastTime) > 2) {
                pushEvent("video_seek", "user_action", meta);
            }

            lastTime = meta.currentTime;
        });
    }

    /***********************
     * YOUTUBE TRACKING
     ***********************/
    let ytReady = false;
    let ytQueue = [];

    function loadYouTubeAPI(callback) {
        if (ytReady) return callback();

        ytQueue.push(callback);

        if (window.YT && window.YT.Player) {
            ytReady = true;
            ytQueue.forEach(cb => cb());
            ytQueue = [];
            return;
        }

        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);

        window.onYouTubeIframeAPIReady = function () {
            ytReady = true;
            ytQueue.forEach(cb => cb());
            ytQueue = [];
        };
    }

    function trackYouTube(iframe, config = {}) {
        loadYouTubeAPI(() => {
            let hasStarted = false;
            let milestones = new Set();
            let lastTime = 0;

            const player = new YT.Player(iframe, {
                events: {
                    onReady: () => {
                        pushEvent("video_load", "system", getMeta());
                    },
                    onStateChange: onStateChange
                }
            });

            function getMeta() {
                const duration = player.getDuration() || 0;
                const currentTime = player.getCurrentTime() || 0;
                const data = player.getVideoData();

                return {
                    id: data.video_id,
                    title: data.title,
                    duration,
                    currentTime,
                    autoplay: false,
                    muted: player.isMuted(),
                    volume: player.getVolume(),
                    playerName: "youtube",
                    format: "youtube"
                };
            }

            function onStateChange(event) {
                const meta = getMeta();

                switch (event.data) {
                    case YT.PlayerState.PLAYING:
                        if (!hasStarted) {
                            hasStarted = true;
                            pushEvent("video_start", "user_action", meta);
                        }
                        pushEvent("video_play", "user_action", meta);
                        break;

                    case YT.PlayerState.PAUSED:
                        pushEvent("video_pause", "user_action", meta);
                        break;

                    case YT.PlayerState.BUFFERING:
                        pushEvent("video_buffer_start", "system", meta);
                        break;

                    case YT.PlayerState.ENDED:
                        pushEvent("video_complete", "complete", meta);
                        break;
                }
            }

            // polling for milestones + seek
            setInterval(() => {
                if (!player || player.getPlayerState() !== YT.PlayerState.PLAYING) return;

                const meta = getMeta();
                const percent = percentPlayed(meta.currentTime, meta.duration);
                const milestone = Math.floor(percent / 10) * 10;

                if (milestone > 0 && milestone <= 100 && !milestones.has(milestone)) {
                    milestones.add(milestone);
                    pushEvent("video_milestone", "milestone", meta);
                }

                if (Math.abs(meta.currentTime - lastTime) > 2) {
                    pushEvent("video_seek", "user_action", meta);
                }

                lastTime = meta.currentTime;
            }, 1000);
        });
    }

    /***********************
     * AUTO ATTACH FUNCTION
     ***********************/
    const _tracked = new WeakSet();

    function attachToElement(el) {
        if (_tracked.has(el)) return;
        _tracked.add(el);

        if (el.tagName === "VIDEO") {
            trackHTML5Video(el);
        }

        // if (el.tagName === "IFRAME" && el.src.includes("youtube.com")) {
        //   trackYouTube(el);
        // }
    }

    function attachVideoTracking() {
        // Track any videos already in the DOM
        document.querySelectorAll("video, iframe").forEach(attachToElement);

        // Watch for videos added dynamically (lazy-loaded blocks, React renders, etc.)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== Node.ELEMENT_NODE) return;
                    if (node.matches("video, iframe")) {
                        attachToElement(node);
                    }
                    node.querySelectorAll("video, iframe").forEach(attachToElement);
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    /***********************
     * PUBLIC API
     ***********************/
    window.VideoAnalytics = {
        attach: attachVideoTracking,
        trackHTML5: trackHTML5Video,
        trackYouTube: trackYouTube
    };

})(window);

export default window.VideoAnalytics;