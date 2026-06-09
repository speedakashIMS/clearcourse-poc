import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import {
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
  loadScript,
  getMetadata
} from './aem.js';
import './tracking/queue.js';
import VideoAnalytics from './tracking/videoTracking.js';
import FilterAnalytics from './tracking/filterTracking.js';
import FormAnalytics from './tracking/formTracking.js';
import PageAnalytics from './tracking/pageTracking.js';
import InteractionAnalytics from './tracking/interactionTracking.js';
import ErrorAnalytics from './tracking/errorTracking.js';
import { isAuthor, origin } from './configuration.js';

/**
 * Moves all the attributes from a given elmenet to another given element.
 * @param {Element} from the element to copy attributes from
 * @param {Element} to the element to copy attributes to
 */
export function moveAttributes(from, to, attributes) {
  if (!attributes) {
    // eslint-disable-next-line no-param-reassign
    attributes = [...from.attributes].map(({ nodeName }) => nodeName);
  }
  attributes.forEach((attr) => {
    const value = from.getAttribute(attr);
    if (value) {
      to?.setAttribute(attr, value);
      from.removeAttribute(attr);
    }
  });
}

/**
 * Move instrumentation attributes from a given element to another given element.
 * @param {Element} from the element to copy attributes from
 * @param {Element} to the element to copy attributes to
 */
export function moveInstrumentation(from, to) {
  moveAttributes(
    from,
    to,
    [...from.attributes]
      .map(({ nodeName }) => nodeName)
      .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-')),
  );
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks() {
  try {
    // TODO: add auto block, if needed
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      //loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  if (
    !window.location.href.endsWith('nav.html')
    && !window.location.href.endsWith('footer.html')
    && !window.location.href.endsWith('nav')
    && !window.location.href.endsWith('footer')
  ) {
    await loadHeader(doc.querySelector('header'));
    await loadFooter(doc.querySelector('footer'));
  }

  //loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  //loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

function loadAdobe() {
  loadScript('https://assets.adobedtm.com/aad7f78d39f2/90269375e547/launch-2ff07a801680-development.min.js')
    .then(() => {
      if (typeof window.flushAdobeEvents === 'function') {
        window.flushAdobeEvents();
      }
    })
    .catch((err) => {
      console.error('Adobe Launch failed to load', err);
    });
}

async function loadPage() {
  PageAnalytics.attach();
  VideoAnalytics.attach();
  //FilterAnalytics.attach();
  FormAnalytics.attach();
  InteractionAnalytics.attach();
  ErrorAnalytics.attach();
  
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAdobe);
  } else {
    setTimeout(loadAdobe, 2000);
  }

  if (location.hash) {
    const hash = location.hash;
  
    history.replaceState(null, '', location.pathname + location.search);
    requestAnimationFrame(() => {
      history.replaceState(null, '', hash);
    });
  }
}

// function showLoader() {
//   const loader = document.createElement('div');
//   loader.id = 'site-loader';
//   document.body.appendChild(loader);
// }

// function hideLoader() {
//   document.getElementById('site-loader')?.remove();
// }

// showLoader();

async function loadPopup() {
  if (isAuthor) { return; }

  try {
    let popupPath = getMetadata('popupcfpath');

    if (!popupPath) {
      try {
        const resp = await fetch('/popup');
        if (resp.ok) {
          const html = await resp.text();
          const match = html.match(/<meta\s+name=["']popupcfpath["']\s+content=["']([^"']+)["']/);
          if (match) {
            [, popupPath] = match;
          }
        }
      } catch (e) {
        // do nothing
      }
    }

    if (popupPath && popupPath.length > 0) {
      const persistedQueriesBaseUrl = `${origin}/graphql/execute.json/ims-foundational-kit`;
      const resp = await fetch(`${persistedQueriesBaseUrl}/getPopupByPath;path=${popupPath}`);
      const json = await resp.json();
      const popup = json?.data?.popupcfByPath?.item;

      if (!popup) {
        return;
      }

      if (popup.storageKey) {
        const storedTime = localStorage.getItem(popup.storageKey);
        const durationMs = (popup.storageDuration || 24) * 60 * 60 * 1000;
        const now = Date.now();

        if (storedTime) {
          const expirationTime = parseInt(storedTime, 10) + durationMs;
          if (now < expirationTime) {
            return;
          }
        }
      }

      const renderPopupModal = async () => {
        const { default: PopUpModal } = await import('./components/PopUpModal.js');

        const modalRoot = document.createElement('div');
        document.body.appendChild(modalRoot);
        const root = createRoot(modalRoot);

        const closeModal = () => {
          if (popup.storageKey) {
            localStorage.setItem(popup.storageKey, Date.now().toString());
          }
          root.unmount();
          modalRoot.remove();
        };

        // eslint-disable-next-line no-underscore-dangle
        const mediaPublishUrl = popup.media?._publishUrl;

        root.render(React.createElement(PopUpModal, {
          isOpen: true,
          onClose: closeModal,
          title: popup.title,
          subtitle: popup.subtitle,
          media: mediaPublishUrl ? {
            media: 'image',
            aspect: 'rectangle',
            imageUrl: mediaPublishUrl,
          } : undefined,
          buttons: popup.buttons.map((button) => ({
            text: button.text,
            href: button.link,
            variant: button.variant,
            closeOnClick: button.closeOnClick,
          })),
          placement: popup.position || 'center',
          trigger: popup.showOnExit ? 'exit-popup' : 'manual',
        }));
      };

      if (popup.showOnExit) {
        renderPopupModal();
      } else {
        const delayMs = (popup.delay || 0) * 1000;
        setTimeout(renderPopupModal, delayMs);
      }
    }
  } catch (error) {
    console.error('Failed to load popup:', error);
  }
}

await loadPage();

loadPopup();
// hideLoader();

// document.querySelectorAll('main div').forEach(div => {
//   div.style.visibility = 'visible';
// });

// document.querySelector('header').style.visibility = 'visible';
