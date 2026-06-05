import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Build a single card <li> element.
 * Cell layout per card row: [image, cardheader, carddescription, cardbuttonlabel, cardbuttonlink]
 * @param {Element} row - the source block row
 * @param {boolean} isImage - true for cards-image variant
 * @returns {HTMLLIElement}
 */
function buildCard(row, isImage) {
  const cells = [...row.children];
  const li = document.createElement('li');
  li.classList.add('cards-item');
  moveInstrumentation(row, li);

  // ── Image / Icon ──
  const imgCell = cells[0];
  if (imgCell) {
    const mediaWrap = document.createElement('div');
    mediaWrap.classList.add(isImage ? 'cards-media' : 'cards-icon-wrap');
    const img = imgCell.querySelector('img');
    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt || '', false, [
        { width: isImage ? '750' : '100' },
      ]);
      moveInstrumentation(img, optimized.querySelector('img'));
      mediaWrap.appendChild(optimized);
    }
    li.appendChild(mediaWrap);
  }

  // ── Body ──
  const body = document.createElement('div');
  body.classList.add('cards-body');

  // Card header (cell 1)
  if (cells[1]) {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('cards-title');
    titleDiv.append(...cells[1].childNodes);
    body.appendChild(titleDiv);
  }

  // Card description (cell 2)
  if (cells[2]) {
    const descDiv = document.createElement('div');
    descDiv.classList.add('cards-desc');
    descDiv.append(...cells[2].childNodes);
    body.appendChild(descDiv);
  }

  // Button (cells 3 + 4)
  const labelText = cells[3]?.textContent?.trim();
  const linkHref = cells[4]?.querySelector('a')?.href || cells[4]?.textContent?.trim();
  li.appendChild(body);
  if (linkHref) {
    const a = document.createElement('a');
    a.href = linkHref;
    a.textContent = labelText || 'Learn more';
    a.classList.add('cards-btn');
    if (isImage) a.classList.add('cards-btn--filled');
    const btnWrap = document.createElement('div');
    btnWrap.classList.add('cards-btn-wrap');
    btnWrap.appendChild(a);
    li.appendChild(btnWrap);
  }

  return li;
}

/**
 * Build a single feature card <li> element.
 * Cell layout: [image, industry, stat, statlabel, quote, authorname, authorrole]
 * @param {Element} row - the source block row
 * @returns {HTMLLIElement}
 */
function buildFeatureCard(row) {
  const cells = [...row.children];
  const li = document.createElement('li');
  li.classList.add('cards-item');
  moveInstrumentation(row, li);

  // Cell 0: venue / property photo (left column)
  if (cells[0]) {
    const photoWrap = document.createElement('div');
    photoWrap.classList.add('cards-feature-photo');
    const img = cells[0].querySelector('img');
    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt || '', false, [{ width: '600' }]);
      moveInstrumentation(img, optimized.querySelector('img'));
      photoWrap.appendChild(optimized);
    }
    li.appendChild(photoWrap);
  }

  // Right column
  const content = document.createElement('div');
  content.classList.add('cards-feature-content');

  // Cell 1: industry / brand logo
  if (cells[1]) {
    const logoWrap = document.createElement('div');
    logoWrap.classList.add('cards-feature-logo');
    const img = cells[1].querySelector('img');
    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt || '', false, [{ width: '240' }]);
      moveInstrumentation(img, optimized.querySelector('img'));
      logoWrap.appendChild(optimized);
    }
    content.appendChild(logoWrap);
  }

  // Stat + label group
  const statGroup = document.createElement('div');
  statGroup.classList.add('cards-feature-stat-group');

  // Cell 2: stat number (e.g. "75%")
  if (cells[2]?.textContent?.trim()) {
    const stat = document.createElement('p');
    stat.classList.add('cards-feature-stat');
    stat.textContent = cells[2].textContent.trim();
    statGroup.appendChild(stat);
  }

  // Cell 3: stat label (e.g. "Increase in sales")
  if (cells[3]?.textContent?.trim()) {
    const label = document.createElement('p');
    label.classList.add('cards-feature-stat-label');
    label.textContent = cells[3].textContent.trim();
    statGroup.appendChild(label);
  }

  if (statGroup.children.length) content.appendChild(statGroup);

  // Cell 4: quote / description (richtext)
  if (cells[4]) {
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('cards-feature-quote');
    quoteDiv.append(...cells[4].childNodes);
    content.appendChild(quoteDiv);
  }

  // Cell 5+6: author name + role
  const authorName = cells[5]?.textContent?.trim();
  const authorRole = cells[6]?.textContent?.trim();
  if (authorName || authorRole) {
    const author = document.createElement('div');
    author.classList.add('cards-feature-author');
    if (authorName) {
      const name = document.createElement('p');
      name.classList.add('cards-feature-author-name');
      name.textContent = authorName;
      author.appendChild(name);
    }
    if (authorRole) {
      const role = document.createElement('p');
      role.classList.add('cards-feature-author-role');
      role.textContent = authorRole;
      author.appendChild(role);
    }
    content.appendChild(author);
  }

  li.appendChild(content);
  return li;
}

/**
 * Wire up page-based dot-indicator carousel for cards-image / cards-features.
 * Desktop: 3 cards per page. Mobile: 1 card per page.
 * Dots represent pages; hidden when there is only one page.
 * Uses ResizeObserver to rebuild dots correctly across breakpoints.
 * @param {HTMLUListElement} ul - the card list
 * @param {HTMLElement} block - the block root
 */
function buildCarousel(ul, block) {
  const carousel = document.createElement('div');
  carousel.classList.add('cards-carousel');

  const track = document.createElement('div');
  track.classList.add('cards-track');
  track.appendChild(ul);
  carousel.appendChild(track);

  const dots = document.createElement('div');
  dots.classList.add('cards-dots');
  dots.setAttribute('aria-label', 'Carousel navigation');
  carousel.appendChild(dots);

  block.appendChild(carousel);

  // Derive page count from actual rendered widths (correct for both breakpoints)
  const getPageCount = () => {
    const pageWidth = ul.offsetWidth;
    if (!pageWidth) return 1;
    return Math.max(1, Math.round(ul.scrollWidth / pageWidth));
  };

  const getCurrentPage = () => {
    const pageWidth = ul.offsetWidth || 1;
    return Math.min(Math.round(ul.scrollLeft / pageWidth), getPageCount() - 1);
  };

  const syncActive = () => {
    const current = getCurrentPage();
    [...dots.children].forEach((d, i) => d.classList.toggle('active', i === current));
  };

  // Build/rebuild dot buttons whenever page count changes (e.g. on resize)
  let lastPageCount = 0;
  const rebuildDots = () => {
    const pageCount = getPageCount();
    dots.hidden = pageCount <= 1;
    if (pageCount === lastPageCount) {
      syncActive();
      return;
    }
    lastPageCount = pageCount;
    dots.innerHTML = '';
    for (let i = 0; i < pageCount; i += 1) {
      const dot = document.createElement('button');
      dot.classList.add('cards-dot');
      dot.setAttribute('aria-label', `Go to page ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        ul.scrollTo({ left: i * ul.offsetWidth, behavior: 'smooth' });
      });
      dots.appendChild(dot);
    }
  };

  // Sync active dot on native scroll (swipe / keyboard)
  ul.addEventListener('scroll', syncActive, { passive: true });

  // Rebuild when layout changes (initial paint + responsive breakpoint changes)
  const ro = new ResizeObserver(rebuildDots);
  ro.observe(ul);
}

export default function decorate(block) {
  const isImage = block.classList.contains('cards-image');
  const isFeatures = block.classList.contains('cards-features');
  const rows = [...block.children];

  // Rows that contain a picture/img are card items; others are intro content
  const introRows = [];
  const cardRows = [];
  rows.forEach((row) => {
    if (row.querySelector('picture, img')) {
      cardRows.push(row);
    } else {
      introRows.push(row);
    }
  });

  block.innerHTML = '';

  // ── Intro section (block-level header + description) ──
  if (introRows.length) {
    const intro = document.createElement('div');
    intro.classList.add('cards-intro');
    introRows.forEach((row) => {
      [...row.children].forEach((cell) => {
        intro.append(...cell.childNodes);
      });
    });
    block.appendChild(intro);
  }

  // ── Card list ──
  const ul = document.createElement('ul');
  ul.classList.add('cards-list');

  if (isFeatures) {
    cardRows.forEach((row) => ul.appendChild(buildFeatureCard(row)));
    buildCarousel(ul, block);
  } else if (isImage) {
    cardRows.forEach((row) => ul.appendChild(buildCard(row, true)));
    buildCarousel(ul, block);
  } else {
    cardRows.forEach((row) => ul.appendChild(buildCard(row, false)));
    block.appendChild(ul);
  }
}
