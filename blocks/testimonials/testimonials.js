/**
 * loads and decorates the testimonials block
 * @param {Element} block The block element
 */
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
      const quote = document.createElement('blockquote');
      quote.classList.add('testimonials-quote');
      quote.innerHTML = cells[0].innerHTML;
      item.appendChild(quote);
    }

    // Cell 1: author info (logo | avatar | name/role)
    if (cells[1]) {
      const author = document.createElement('div');
      author.classList.add('testimonials-author');
      author.innerHTML = cells[1].innerHTML;
      item.appendChild(author);
    }

    wrapper.appendChild(item);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}
