const QUOTE_MARK = `<svg class="testimonials-quote-mark" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M0 16V9.97333C0 7.86222 0.462222 5.97333 1.38667 4.30667C2.33333 2.61778 3.76889 1.21333 5.69333 0.0933334L7.46667 2.58667C6.28889 3.28 5.37778 4.10667 4.73333 5.06667C4.08889 6.02667 3.76889 7.16444 3.77333 8.48H7.46667V16H0ZM13.8667 16V9.97333C13.8667 7.86222 14.3289 5.97333 15.2533 4.30667C16.2 2.61778 17.6356 1.21333 19.56 0.0933334L21.3333 2.58667C20.1556 3.28 19.2444 4.10667 18.6 5.06667C17.9556 6.02667 17.6356 7.16444 17.64 8.48H21.3333V16H13.8667Z" fill="#26b3c3"/>
</svg>`;

const QUOTE_MARK_CLOSE = `<svg class="testimonials-quote-mark testimonials-quote-mark--close" width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M21.3333 0V6.02667C21.3333 8.13778 20.8711 10.0267 19.9467 11.6933C19 13.3822 17.5644 14.7867 15.64 15.9067L13.8667 13.4133C15.0444 12.72 15.9556 11.8933 16.6 10.9333C17.2444 9.97333 17.5644 8.83556 17.56 7.52H13.8667V0H21.3333ZM7.46667 0V6.02667C7.46667 8.13778 7.00444 10.0267 6.08 11.6933C5.13333 13.3822 3.69778 14.7867 1.77333 15.9067L0 13.4133C1.17778 12.72 2.08889 11.8933 2.73333 10.9333C3.37778 9.97333 3.69778 8.83556 3.69333 7.52H0V0H7.46667Z" fill="#26b3c3"/>
</svg>`;

export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.classList.add('testimonials-inner');

  rows.forEach((row) => {
    const cells = [...row.children];
    const item = document.createElement('div');
    item.classList.add('testimonials-item');

    // Cell 0: quote text
    if (cells[0]) {
      const quoteWrap = document.createElement('div');
      quoteWrap.classList.add('testimonials-quote-wrap');
      quoteWrap.innerHTML = QUOTE_MARK;

      const quote = document.createElement('blockquote');
      quote.classList.add('testimonials-quote');
      quote.append(...cells[0].childNodes);
      quoteWrap.appendChild(quote);
      quoteWrap.insertAdjacentHTML('beforeend', QUOTE_MARK_CLOSE);
      item.appendChild(quoteWrap);
    }

    // Cell 1: attribution — expects: logo image | avatar image | name / role text
    if (cells[1]) {
      const author = document.createElement('div');
      author.classList.add('testimonials-author');

      const images = [...cells[1].querySelectorAll('img')];
      const texts = [...cells[1].querySelectorAll('p')];

      // First image → company logo
      if (images[0]) {
        const logoWrap = document.createElement('div');
        logoWrap.classList.add('testimonials-logo');
        logoWrap.appendChild(images[0].closest('picture') || images[0]);
        author.appendChild(logoWrap);
      }

      // Second image → avatar
      if (images[1]) {
        const avatarWrap = document.createElement('div');
        avatarWrap.classList.add('testimonials-avatar');
        avatarWrap.appendChild(images[1].closest('picture') || images[1]);
        author.appendChild(avatarWrap);
      }

      // Text paragraphs → name + role
      if (texts.length) {
        const meta = document.createElement('div');
        meta.classList.add('testimonials-meta');
        if (texts[0]) {
          const name = document.createElement('p');
          name.classList.add('testimonials-name');
          name.textContent = texts[0].textContent;
          meta.appendChild(name);
        }
        if (texts[1]) {
          const role = document.createElement('p');
          role.classList.add('testimonials-role');
          role.textContent = texts[1].textContent;
          meta.appendChild(role);
        }
        author.appendChild(meta);
      }

      item.appendChild(author);
    }

    wrapper.appendChild(item);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}
