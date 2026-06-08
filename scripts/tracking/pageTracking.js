/** *********************************************************
 * PAGE VIEW ANALYTICS — Advanced Page View Event Tracking Framework
 *
 * Pushes a structured page_view event to window.adobeDataLayer on every
 * full page load and on SPA virtual navigation (historychange).
 *
 * The page_view event MUST fire before any other tracking events per spec.
 *
 * Initialise by calling PageAnalytics.attach(config?) once on page load.
 * For manual SPA navigation calls use PageAnalytics.trackVirtual(config?).
 ********************************************************** */

(function (window) {
  window.adobeDataLayer = window.adobeDataLayer || [];

  let lastPage = null;
  let hasFired = false;

  /** *********************
   * NORMALISATION
   ********************** */
  function normalize(value) {
    if (value == null) return undefined;
    if (typeof value !== 'string') return value;
    const cleaned = value
      .replace(/<[^>]*>/g, '')
      .toLowerCase()
      .trim()
      .slice(0, 100);
    return cleaned || undefined;
  }

  function formatDate(isoString) {
    if (!isoString) return undefined;
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return undefined;
      return date.toISOString().split('T')[0];
    } catch {
      return undefined;
    }
  }

  function cleanObject(obj) {
    const out = {};
    Object.keys(obj).forEach((key) => {
      const val = obj[key];
      if (val !== undefined && val !== null && val !== '') {
        out[key] = val;
      }
    });
    return out;
  }

  /** *********************
   * URL PARSING
   ********************** */
  function getPageData(url) {
    try {
      const u = new URL(url || window.location.href);
      return cleanObject({
        full_url: normalize(u.href),
        url_path: normalize(u.pathname),
        url_hash_value: normalize(u.hash.replace('#', '')),
        url_querystring: normalize(u.search.replace('?', '')),
        url_domain: normalize(u.hostname),
      });
    } catch {
      return {};
    }
  }

  /** *********************
   * AUTO CONFIG DETECTION
   * Reads available AEM EDS / DOM signals so callers don't have to pass
   * everything manually.
   ********************** */
  function getAutoConfig() {
    // Language from <html lang="...">
    const language = normalize(document.documentElement.lang);

    // Page type: prefer meta[name="template"], then body data-template, then infer from path
    const templateMeta = document.querySelector('meta[name="template"]')?.content;
    const bodyTemplate = document.body?.dataset?.template;
    const path = window.location.pathname.replace(/\/$/, '');
    const inferredType = path === '' || path === '/index' ? 'home' : 'generic';
    const pageType = normalize(templateMeta || bodyTemplate || inferredType);

    // Brand / sector from AEM EDS hlx context or meta tags
    const brand = normalize(
      window.hlx?.brand
      || document.querySelector('meta[name="brand"]')?.content,
    );
    const sector = normalize(
      window.hlx?.sector
      || document.querySelector('meta[name="sector"]')?.content,
    );

    return {
      language, pageType, brand, sector,
    };
  }

  /** *********************
   * CONTENT METADATA EXTRACTION
   * Reads document meta tags to populate content object fields
   ********************** */
  function getContentMetadata() {
    const publishedTime = document.querySelector('meta[name="published-time"]')?.content;
    const modifiedTime = document.querySelector('meta[name="modified-time"]')?.content;
    const tagsString = document.querySelector('meta[name="cq-tags"]')?.content;

    const tags = tagsString
      ? tagsString.split(',').map((tag) => tag.trim()).filter((tag) => tag)
      : undefined;

    return cleanObject({
      publishDate: formatDate(publishedTime),
      updateDate: formatDate(modifiedTime),
      tags,
    });
  }

  const SESSION_KEY = '_page_analytics_last_url';

  /** *********************
   * PREVIOUS PAGE RESOLUTION
   * On the initial page load read from sessionStorage (preserves hash) then
   * fall back to document.referrer. On subsequent SPA navigations use the
   * previously captured current page.
   ********************** */
  function getPreviousPageData() {
    if (lastPage) return lastPage;
    try {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored) return getPageData(stored);
    } catch {
      // sessionStorage unavailable
    }
    if (document.referrer) return getPageData(document.referrer);
    return null;
  }

  /** *********************
   * PERSIST CURRENT URL (with hash) BEFORE UNLOAD
   ********************** */
  function persistCurrentUrl() {
    try {
      sessionStorage.setItem(SESSION_KEY, window.location.href);
    } catch {
      // sessionStorage unavailable
    }
  }

  /** *********************
   * CORE PUSH
   ********************** */
  function pushPageView(config = {}) {
    const auto = getAutoConfig();
    const current = getPageData();
    const previous = getPreviousPageData();
    const autoContent = getContentMetadata();

    const data = {
      event_trigger: normalize(config.trigger || 'pageload'),

      current_page: cleanObject({
        ...current,
        page_type: normalize(config.pageType) || auto.pageType,
      }),

      site: cleanObject({
        language: normalize(config.language) || auto.language,
        currency: normalize(config.currency),
        brand: normalize(config.brand) || auto.brand,
        sector: normalize(config.sector) || auto.sector,
      }),

      user: cleanObject({
        login_status: normalize(config.loginStatus),
        identifier: normalize(config.userId),
      }),
    };

    // previous_page: only include when data is available (spec: MANDATORY
    // fields within it are only required when the object is present)
    if (previous && Object.keys(previous).length > 0) {
      data.previous_page = previous;
    }

    // optional content object (content-specific page views)
    // merge auto-detected metadata with explicit config (config overrides auto)
    const contentConfig = { ...autoContent, ...config.content };
    const tags = Array.isArray(contentConfig.tags) ? contentConfig.tags : undefined;
    const hasBlogTag = tags?.some((tag) => tag.endsWith('blog'));

    if (Object.keys(contentConfig).length > 0 && hasBlogTag) {
      data.content = cleanObject({
        type: normalize(contentConfig.type),
        id: normalize(contentConfig.id),
        title: normalize(contentConfig.title),
        category: normalize(contentConfig.category),
        subcategory: normalize(contentConfig.subcategory),
        author: normalize(contentConfig.author),
        publish_date: normalize(contentConfig.publishDate),
        update_date: normalize(contentConfig.updateDate),
        tags,
        word_count: contentConfig.wordCount,
        reading_time: contentConfig.readingTime,
      });
    }

    // optional event object (event-specific page views)
    if (config.event) {
      data.event = cleanObject({
        id: normalize(config.event.id),
        name: normalize(config.event.name),
        type: normalize(config.event.type),
        category: normalize(config.event.category),
        start_date: normalize(config.event.startDate),
        end_date: normalize(config.event.endDate),
        location_type: normalize(config.event.locationType),
        location_name: normalize(config.event.locationName),
        city: normalize(config.event.city),
        country: normalize(config.event.country),
        region: normalize(config.event.region),
        organiser: normalize(config.event.organiser),
        registration_status: normalize(config.event.registrationStatus),
        price: config.event.price,
        currency: normalize(config.event.currency),
      });
    }

    const payload = { event: 'page_view', data };
    console.log('Page Analytics Event:', payload);
    window.queueAdobeEvent(payload);

    lastPage = current;
    hasFired = true;
  }

  /** *********************
   * INIT — full page load (fires once)
   ********************** */
  function init(config = {}) {
    if (hasFired) return;
    pushPageView({ ...config, trigger: 'pageload' });
  }

  /** *********************
   * SPA — virtual page navigation
   ********************** */
  function trackVirtualPage(config = {}) {
    pushPageView({ ...config, trigger: 'historychange' });
  }

  /** *********************
   * SPA HISTORY LISTENER
   ********************** */
  function attachSPAListener(config = {}) {
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    function handleChange() {
      setTimeout(() => trackVirtualPage(config), 0);
    }

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleChange();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleChange();
    };

    window.addEventListener('popstate', handleChange);
  }

  /** *********************
   * ATTACH — call once on page load from scripts.js
   * Fires the initial page_view and sets up SPA listeners.
   * config is optional; all fields auto-detected where possible.
   ********************** */
  function attach(config = {}) {
    init(config);
    attachSPAListener(config);
    window.addEventListener('pagehide', persistCurrentUrl);
  }

  /** *********************
   * PUBLIC API
   ********************** */
  window.PageAnalytics = {
    attach,
    init,
    track: pushPageView,
    trackVirtual: trackVirtualPage,
    attachSPA: attachSPAListener,
  };
}(window));

export default window.PageAnalytics;
