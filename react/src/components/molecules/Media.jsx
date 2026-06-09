import { lazy, Suspense } from 'react';
import Lottie from 'lottie-react';
const Flipbook = lazy(() => import('./Flipbook'));

const Media = ({
  media = 'image', // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect = 'default', // 'default' | 'rectangle' | 'square'
  objectFit = 'cover', // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl,
  videoUrl,
  lottieUrl,
  lottieData,
  iframeUrl,
  flipbookUrl,
  title,
  className = '',
}) => {
  const isAuthor =
    typeof window !== 'undefined' &&
    window.location.origin.indexOf('author') > -1;
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const aspectClass = aspect === 'square'
    ? 'aspect-square'
    : aspect === 'rectangle'
      ? 'aspect-[4/3]'
    : media === 'video'
      ? 'aspect-video'
      : '';

  const wrapperClasses = `relative w-full h-full ${aspectClass}`.trim();
  const contentClasses = aspect === 'default'
    ? `w-full h-full ${className}`.trim()
    : `absolute inset-0 w-full h-full ${className}`.trim();
  const lottieClasses = 'w-full h-full';
  const iframeClasses = aspect === 'default'
    ? `${contentClasses}`.trim()
    : contentClasses;
  const objectFitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';
  const lottiePreserveAspectRatio =
    objectFit === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice';
  const flipbookWrapperClasses = `relative w-full ${className}`.trim();
  const flipbookContainerClasses = 'w-full min-h-[280px]';

  switch (media) {
    case 'image':
      if (imageUrl) {
        return (
          <div className={wrapperClasses}>
            <img
              src={imageUrl}
              alt={title || 'Media image'}
              className={`${objectFitClass} ${contentClasses}`.trim()}
              loading='lazy'
            />
          </div>
        );
      }
      break;

    case 'video':
      if (videoUrl) {
        const isYouTube = videoUrl.includes('youtube.com/watch') || videoUrl.includes('youtu.be/');
        let embedUrl = videoUrl;
        if (isYouTube) {
          const videoId = videoUrl.includes('youtu.be/')
            ? videoUrl.split('youtu.be/')[1].split('?')[0]
            : videoUrl.split('v=')[1]?.split('&')[0];
          embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        const embedSrc = (() => {
          if (!isYouTube) return embedUrl;
          try {
            const url = new URL(embedUrl);
            url.searchParams.set('autoplay', '0');
            url.searchParams.set('mute', '0');
            url.searchParams.set('playsinline', '1');
            url.searchParams.set('controls', '1');
            url.searchParams.set('rel', '0');
            return url.toString();
          } catch (error) {
            if (embedUrl.includes('?')) {
              return embedUrl.includes('autoplay=')
                ? embedUrl
                : `${embedUrl}&autoplay=0`;
            }
            return `${embedUrl}?autoplay=0`;
          }
        })();

        return (
          <div className={wrapperClasses}>
            {isYouTube ? (
              <iframe
                src={embedSrc}
                title={title || 'Video player'}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`${contentClasses} ${objectFitClass}`.trim()}
              />
            ) : (
              <video
                className={`${contentClasses} ${objectFitClass}`.trim()}
                autoPlay={false}
                controls
                playsInline
                preload="metadata"
                title={title || 'Video player'}
              >
                <source src={videoUrl} />
              </video>
            )}
          </div>
        );
      }
      break;

    case 'lottie':
      if (lottieData) {
        if (isAuthor) {
          return (
            <div className={wrapperClasses} role="img" aria-label={title || 'Animation'}>
              <div
                className={`flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${contentClasses}`.trim()}
              >
                <div className="text-center">Lottie preview</div>
              </div>
            </div>
          );
        }

        return (
          <div
            className={wrapperClasses}
            role="img"
            aria-label={title || 'Animation'}
          >
            <div className={`${contentClasses} overflow-hidden`.trim()}>
              <Lottie
                animationData={lottieData}
                loop={!prefersReducedMotion}
                autoplay={!prefersReducedMotion}
                className={lottieClasses}
                style={{ width: '100%', height: '100%' }}
                rendererSettings={{ preserveAspectRatio: lottiePreserveAspectRatio }}
              />
            </div>
          </div>
        );
      }

      if (lottieUrl) {
        return (
          <div className={wrapperClasses}>
            <div className="absolute inset-0 flex items-center justify-center text-body-default text-center p-40">
              Loading Lottie animation...
            </div>
          </div>
        );
      }
      break;

    case 'iframe':
      if (iframeUrl) {
        return (
          <div className={wrapperClasses}>
            <iframe
              src={iframeUrl}
              title={title || 'Iframe content'}
              frameBorder="0"
              className={`${iframeClasses} ${objectFitClass}`.trim()}
            />
          </div>
        );
      }
      break;

    case 'flipbook':
      if (flipbookUrl) {
        if (isAuthor) {
          return (
            <div className={flipbookWrapperClasses} role="img" aria-label={title || 'Flipbook'}>
              <div
                className={`flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${flipbookContainerClasses}`.trim()}
              >
                <div className="text-center">Flipbook preview</div>
              </div>
            </div>
          );
        }

        return (
          <div className={flipbookWrapperClasses}>
            <div className={flipbookContainerClasses}>
              <Suspense fallback={<div>Loading PDF...</div>}>
                <Flipbook pdfUrl={flipbookUrl} title={title} className="w-full" />
              </Suspense>
            </div>
          </div>
        );
      }
      break;

    default:
      break;
  }

  return (
    <div className={wrapperClasses}>
      <div className={`flex items-center justify-center text-body-default text-center p-40 ${aspect === 'default' ? '' : 'absolute inset-0'}`.trim()}>
        {media ? `${media.charAt(0).toUpperCase() + media.slice(1)} placeholder` : 'Image/Video/Lottie/iframe'}
      </div>
    </div>
  );
};

export default Media;

