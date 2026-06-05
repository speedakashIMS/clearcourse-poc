const QUOTE_MARK = `<svg class="testimonials-quote-mark" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M 20.896 16 L 13.197 16 L 19.796 0 L 25 0 L 20.896 16 Z M 7.699 16 L 0 16 L 6.599 0 L 11.829 0 L 7.699 16 Z" fill="#26b3c3"/>
</svg>`;

const QUOTE_MARK_CLOSE = `<svg class="testimonials-quote-mark testimonials-quote-mark-close" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M 4.104 0 L 11.803 0 L 5.204 16 L 0 16 L 4.104 0 Z M 17.302 0 L 25 0 L 18.401 16 L 13.171 16 L 17.302 0 Z" fill="#26b3c3"/>
</svg>`;

export default function decorate(block) {
  const rows = [...block.children];

  const wrapper = document.createElement('div');
  wrapper.classList.add('testimonials-inner');

  const item = document.createElement('div');
  item.classList.add('testimonials-item');

  // Row 0: quote text
  if (rows[0]) {
    const quoteWrap = document.createElement('div');
    quoteWrap.classList.add('testimonials-quote-wrap');
    quoteWrap.innerHTML = QUOTE_MARK;

    const quote = document.createElement('blockquote');
    quote.classList.add('testimonials-quote');
    quote.append(...rows[0].children[0].childNodes);
    quoteWrap.appendChild(quote);
    quoteWrap.insertAdjacentHTML('beforeend', QUOTE_MARK_CLOSE);
    item.appendChild(quoteWrap);
  }

  // Attribution: logo | avatar | name + title — all in one row
  const attribution = document.createElement('div');
  attribution.classList.add('testimonials-attribution');

  // Row 1: industry logo (reference → image)
  if (rows[1]) {
    const img = rows[1].querySelector('img');
    if (img) {
      const logoWrap = document.createElement('div');
      logoWrap.classList.add('testimonials-logo');
      logoWrap.appendChild(img.closest('picture') || img);
      attribution.appendChild(logoWrap);
    }
  }

  // Row 2: author avatar (reference → image)
  if (rows[2]) {
    const img = rows[2].querySelector('img');
    if (img) {
      const avatarWrap = document.createElement('div');
      avatarWrap.classList.add('testimonials-avatar');
      avatarWrap.appendChild(img.closest('picture') || img);
      attribution.appendChild(avatarWrap);
    }
  }

  // Row 3: author name + title (richtext — first <p> is name, second is title)
  if (rows[3]) {
    const nameRole = document.createElement('div');
    nameRole.classList.add('testimonials-name-role');
    nameRole.append(...rows[3].children[0].childNodes);
    attribution.appendChild(nameRole);
  }

  item.appendChild(attribution);
  wrapper.appendChild(item);

  block.innerHTML = '';
  block.appendChild(wrapper);
}
