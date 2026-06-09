/***********************************************************
 * ERROR ANALYTICS — Error Event Tracking Framework
 *
 * Pushes a structured "error" event to window.queueAdobeEvent for any
 * error that disrupts normal use of the site.
 *
 * Excluded per spec: form field validation errors, failed logins.
 * These are covered by formTracking.js.
 *
 * Initialise by calling ErrorAnalytics.attach() once on page load.
 * For manual error tracking call ErrorAnalytics.trackError(config).
 ***********************************************************/

(function (window) {
  /***********************
   * NORMALISATION
   ***********************/
  function normalize(value) {
    if (value == null) return undefined;
    const cleaned = String(value)
      .replace(/<[^>]*>/g, '')
      .toLowerCase()
      .trim()
      .slice(0, 100);
    return cleaned || undefined;
  }

  function cleanObject(obj) {
    const out = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
        out[key] = obj[key];
      }
    });
    return out;
  }

  /***********************
   * CORE PUSH
   ***********************/
  function trackError(config = {}) {
    const error = cleanObject({
      category: normalize(config.category),
      code: normalize(config.code),
      message: normalize(config.message),
      severity: normalize(config.severity),
      affected_component: normalize(config.affectedComponent),
    });

    if (!error.category || !error.code) {
      console.warn('ErrorAnalytics: category and code are required');
      return;
    }

    const payload = {
      event: 'error',
      data: {
        event_trigger: 'system_response',
        error,
      },
    };

    console.log('Error Analytics Event:', payload);
    window.queueAdobeEvent(payload);
  }

  /***********************
   * 404 DETECTION
   * AEM EDS serves 404 pages with a meta[name="status"] tag or
   * falls back to checking document.title.
   ***********************/
  function detect404() {
    if (window.isErrorPage && window.errorCode === '404') return true;
    if (document.querySelector('meta[name="status"]')?.content === '404') return true;
    return false;
  }

  /***********************
   * ATTACH — call once on page load
   ***********************/
  function attach() {
    if (detect404()) {
      trackError({
        category: 'system',
        code: '404',
        message: "sorry, the page you're looking for was not found",
        severity: 'warning',
      });
    }
  }

  /***********************
   * PUBLIC API
   ***********************/
  window.ErrorAnalytics = {
    attach,
    trackError,
  };
})(window);

export default window.ErrorAnalytics;