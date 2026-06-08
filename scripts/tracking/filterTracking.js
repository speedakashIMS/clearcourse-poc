/** *********************************************************
 * FILTER ANALYTICS UTILITY
 ********************************************************** */

(function (window) {
  window.adobeDataLayer = window.adobeDataLayer || [];

  /** *********************
     * NORMALIZATION
     ********************** */
  function normalize(value) {
    if (typeof value === 'string') {
      return value
        .toLowerCase()
        .replace(/<[^>]*>?/gm, '')
        .trim()
        .substring(0, 100);
    }
    return value;
  }

  function cleanObject(obj) {
    const cleaned = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
        cleaned[key] = obj[key];
      }
    });
    return cleaned;
  }

  /** *********************
     * CORE PUSH
     ********************** */
  function pushFilterEvent(interaction) {
    const payload = {
      event: 'filter_change',
      data: {
        event_trigger: 'user_action',
        interaction: cleanObject({
          element_type: 'filter',
          element_id: normalize(interaction.elementId),
          element_text: normalize(interaction.elementText),
          element_position: normalize(interaction.elementPosition),
          filter_action: normalize(interaction.filterAction),
          filter_group: normalize(interaction.filterGroup),
          filter_value: normalize(interaction.filterValue),
        }),
      },
    };
    console.log('Filter Analytics Event:', payload);
    window.queueAdobeEvent(payload);
  }

  /** *********************
     * EXTRACT FROM DOM
     ********************** */
  function extractFromElement(el, config = {}) {
    return {
      elementId:
                config.elementId
                || el.id
                || el.getAttribute('data-filter-id'),

      elementText:
                config.elementText
                || el.getAttribute('data-filter-label')
                || el.textContent,

      elementPosition:
                config.elementPosition
                || el.closest('[data-filter-position]')?.getAttribute('data-filter-position')
                || 'unknown',

      filterAction:
                config.filterAction
                || inferAction(el),

      filterGroup:
                config.filterGroup
                || el.getAttribute('data-filter-group'),

      filterValue:
                config.filterValue
                || el.value
                || el.getAttribute('data-filter-value'),
    };
  }

  /** *********************
     * ACTION INFERENCE
     ********************** */
  function inferAction(el) {
    if (el.type === 'checkbox' || el.type === 'radio') {
      return el.checked ? 'select' : 'deselect';
    }

    if (el.tagName === 'SELECT') {
      return 'select';
    }

    return 'select'; // default fallback
  }

  /** *********************
     * TRACK SINGLE ELEMENT
     ********************** */
  function trackElement(el, config = {}) {
    const interaction = extractFromElement(el, config);

    // spec requires mandatory fields
    if (!interaction.elementPosition || !interaction.filterAction || !interaction.filterGroup || !interaction.filterValue) {
      return; // fail silently (or log if needed)
    }

    pushFilterEvent(interaction);
  }

  /** *********************
     * DELEGATED LISTENER
     ********************** */
  function attachFilterTracking(selector = '[data-filter]') {
    document.addEventListener('change', (e) => {
      const el = e.target.closest(selector);
      if (!el) return;

      trackElement(el);
    });

    document.addEventListener('click', (e) => {
      const el = e.target.closest(selector);
      if (!el) return;

      // prevent duplicate firing for inputs (change already handled)
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT') return;

      trackElement(el);
    });
  }

  /** *********************
     * PUBLIC API
     ********************** */
  window.FilterAnalytics = {
    attach: attachFilterTracking,
    track: trackElement,
    push: pushFilterEvent,
  };
}(window));

export default window.FilterAnalytics;
