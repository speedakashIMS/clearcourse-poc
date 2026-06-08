/* eslint-env browser */

/** *********************************************************
 * INTERACTION ANALYTICS UTILITY
 ********************************************************** */

(function (window) {
  window.adobeDataLayer = window.adobeDataLayer || [];

  /** *******************
   * CONSTANTS
   ******************** */
  const DOWNLOAD_EXTENSIONS = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip'];

  /** *********************
   * NORMALIZATION
   ********************** */
  function stripHtml(value) {
    if (value == null) return '';

    const tmp = document.createElement('div');
    tmp.innerHTML = String(value);

    return (tmp.textContent || tmp.innerText || '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normalizeString(value) {
    const stripped = stripHtml(value);
    return stripped ? stripped.toLowerCase().slice(0, 100) : undefined;
  }

  function normalizeUrl(value) {
    if (!value) return undefined;
    return String(value).trim().toLowerCase().slice(0, 100);
  }

  function normalizeNumber(value) {
    if (value == null || value === '') return undefined;

    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
  }

  function cleanObject(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([, value]) => (
        value !== undefined
        && value !== null
        && value !== ''
      )),
    );
  }

  /** *********************
   * HELPERS
   ********************** */
  function getClosestAttribute(element, attributeName) {
    return element?.closest?.(`[${attributeName}]`)?.getAttribute(attributeName) || undefined;
  }

  function getHref(element) {
    if (!element) return undefined;

    if (element.matches?.('a[href]')) {
      return element.getAttribute('href') || undefined;
    }

    return element.querySelector?.('a[href]')?.getAttribute('href') || undefined;
  }

  function getBlockRoot(element) {
    return element?.closest?.('[data-block-name]');
  }

  function getComponentName(element, overrideValue) {
    const blockRoot = getBlockRoot(element);

    return normalizeString(
      overrideValue || blockRoot?.dataset.blockName,
    );
  }

  function getLocation(element, overrideValue) {
    if (overrideValue) return normalizeString(overrideValue);

    if (element?.closest?.('header')) return 'header';
    if (element?.closest?.('footer')) return 'footer';
    if (element?.closest?.('main')) return 'main';

    return undefined;
  }

  function getTextFallback(element) {
    return (
      element?.getAttribute?.('aria-label')
      || element?.getAttribute?.('title')
      || element?.textContent
      || element?.querySelector?.('img[alt]')?.getAttribute('alt')
      || undefined
    );
  }

  function classifyLink(href) {
    if (!href) return undefined;

    const normalizedHref = href.trim();

    if (normalizedHref.startsWith('mailto:')) return 'mailto';
    if (normalizedHref.startsWith('tel:')) return 'tel';

    try {
      const url = new URL(normalizedHref, window.location.origin);
      const extension = url.pathname.split('.').pop()?.toLowerCase();

      if (extension && DOWNLOAD_EXTENSIONS.includes(extension)) return 'download';

      return url.origin === window.location.origin ? 'internal' : 'external';
    } catch (error) {
      return undefined;
    }
  }

  function getLinkDomain(href) {
    if (!href) return undefined;

    try {
      return normalizeString(new URL(href, window.location.origin).hostname);
    } catch (error) {
      return undefined;
    }
  }

  function getFileMetadata(href) {
    if (!href) return {};

    try {
      const url = new URL(href, window.location.origin);
      const fileName = url.pathname.split('/').pop() || '';
      const fileType = fileName.includes('.') ? fileName.split('.').pop() : undefined;

      return cleanObject({
        file_name: normalizeString(fileName),
        file_type: normalizeString(fileType),
        file_url: normalizeUrl(url.pathname),
      });
    } catch (error) {
      return {};
    }
  }

  /** *********************
   * INFERENCE
   ********************** */
  function inferType(element, overrideValue) {
    if (overrideValue) return normalizeString(overrideValue);

    const href = getHref(element);
    const linkClassification = classifyLink(href);

    if (linkClassification === 'download') return 'download';

    if (href) {
      if (element?.closest?.('header, footer, nav')) return 'nav';
      return 'link';
    }

    if (element?.closest?.('header, footer, nav')) return 'nav';

    if (element?.closest?.('.accordion')) return 'accordion';

    if (element?.closest?.('.tabbed')) return 'tab';

    return 'cta';
  }

  function inferName(element, overrideValue) {
    if (overrideValue) return normalizeString(overrideValue);

    const href = getHref(element);
    if (href) {
      const fileMetadata = getFileMetadata(href);
      return normalizeString(
        getTextFallback(element)
        || fileMetadata.file_name
        || href,
      );
    }

    return normalizeString(getTextFallback(element));
  }

  function inferPosition(element, overrideValue) {
    const explicitPosition = overrideValue ?? getClosestAttribute(element, 'data-analytics-position');
    const normalizedExplicitPosition = normalizeNumber(explicitPosition);

    if (normalizedExplicitPosition) return normalizedExplicitPosition;

    const parent = element?.parentElement;
    if (!parent) return undefined;

    const siblings = Array.from(parent.children)
      .filter((child) => child.tagName === element.tagName);

    if (siblings.length <= 1) return undefined;

    const index = siblings.indexOf(element);
    return index >= 0 ? index + 1 : undefined;
  }

  /** *********************
   * BUILD INTERACTION
   ********************** */
  function buildInteraction(element, overrides = {}) {
    const href = overrides.href || getHref(element);
    const linkClassification = overrides.linkClassification || classifyLink(href);

    const interaction = cleanObject({
      name: inferName(element, overrides.name),
      type: inferType(element, overrides.type),
      component_name: getComponentName(element, overrides.componentName),
      location: getLocation(element, overrides.location),
      position: inferPosition(element, overrides.position),
      state: normalizeString(overrides.state),
    });

    if (href && linkClassification && overrides.event !== 'interaction_state_change') {
      Object.assign(interaction, cleanObject({
        link_url: normalizeUrl(href),
        link_domain: getLinkDomain(href),
        link_classification: normalizeString(linkClassification),
      }));
    }

    if (linkClassification === 'download' || overrides.type === 'download') {
      Object.assign(interaction, getFileMetadata(href));
    }

    return interaction;
  }

  /** *********************
   * CORE PUSH
   ********************** */
  function pushEvent(eventName, trigger, interaction) {
    console.log('Pushing event:', eventName, { trigger, interaction });
    if (!eventName || !interaction?.type || !interaction?.location) return false;

    window.queueAdobeEvent({
      event: eventName,
      data: cleanObject({
        event_trigger: normalizeString(trigger) || 'click',
        interaction: cleanObject(interaction),
      }),
    });

    return true;
  }

  /** *********************
   * TRACK INTERACTION
   ********************** */
  function trackInteraction(element, overrides = {}) {
    if (!element) return false;

    const href = overrides.href || getHref(element);
    const linkClassification = overrides.linkClassification || classifyLink(href);

    const eventName = overrides.event || (
      linkClassification === 'download'
        ? 'interaction_download'
        : href
          ? 'interaction_link_click'
          : 'interaction'
    );

    return pushEvent(
      eventName,
      overrides.eventTrigger || 'click',
      buildInteraction(element, { ...overrides, href, linkClassification }),
    );
  }

  /** *********************
   * STATE CHANGE TRACKING
   ********************** */
  function trackStateChange(element, overrides = {}) {
    if (!element) return false;

    return pushEvent(
      'interaction_state_change',
      overrides.eventTrigger || 'click',
      buildInteraction(element, { ...overrides, event: 'interaction_state_change' }),
    );
  }

  /** *********************
   * GUARD FUNCTIONS
   ********************** */
  function isNativeInteractive(element) {
    return element?.matches?.('a[href], button, input, select, textarea, summary');
  }

  function shouldSkipGenericInteraction(element) {
    return element?.closest?.('[data-analytics-skip-generic="true"]') != null;
  }

  /** *********************
   * CLICK HANDLER
   ********************** */
  function handleClick(event) {
    if (!event.isTrusted) return;

    const interactiveElement = event.target?.closest?.('a[href], button, [role="button"]');

    if (!interactiveElement || shouldSkipGenericInteraction(interactiveElement)) return;

    const ariaExpanded = interactiveElement.getAttribute('aria-expanded');
    if (ariaExpanded !== null) {
      // aria-expanded is still the pre-click value at this point
      const newState = ariaExpanded === 'true' ? 'opened' : 'closed';
      trackStateChange(interactiveElement, { eventTrigger: 'click', state: newState });
      return;
    }

    trackInteraction(interactiveElement, { eventTrigger: 'click' });
  }

  /** *********************
   * KEYDOWN HANDLER
   ********************** */
  function handleKeyDown(event) {
    if (!event.isTrusted || event.repeat || !['Enter', ' '].includes(event.key)) return;

    const interactiveElement = event.target?.closest?.('[role="button"], [role="link"]');

    if (!interactiveElement || isNativeInteractive(interactiveElement) || shouldSkipGenericInteraction(interactiveElement)) return;

    trackInteraction(interactiveElement, { eventTrigger: 'keypress' });
  }

  /** *********************
   * ATTACH LISTENERS
   ********************** */
  function attachInteractionTracking() {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    window.imsAnalytics = {
      trackInteraction,
      trackStateChange,
    };
  }

  /** *********************
   * PUBLIC API
   ********************** */
  window.InteractionAnalytics = {
    attach: attachInteractionTracking,
    trackInteraction,
    trackStateChange,
  };
}(window));

export default window.InteractionAnalytics;
