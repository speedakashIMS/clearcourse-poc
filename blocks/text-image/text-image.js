/**
 * loads and decorates the text-image block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  const row = rows[0];
  if (!row) return;

  const cells = [...row.children];
  const wrapper = document.createElement('div');
  wrapper.classList.add('text-image-inner');

  // Cell 0: media (image)
  if (cells[0]) {
    const media = document.createElement('div');
    media.classList.add('text-image-media');
    media.innerHTML = cells[0].innerHTML;
    wrapper.appendChild(media);
  }

  // Cell 1: text + button
  if (cells[1]) {
    const text = document.createElement('div');
    text.classList.add('text-image-text');
    text.innerHTML = cells[1].innerHTML;
    wrapper.appendChild(text);
  }

  // Reverse layout variant
  if (block.classList.contains('reverse')) {
    wrapper.style.direction = 'rtl';
    wrapper.querySelectorAll('.text-image-media, .text-image-text').forEach((el) => {
      el.style.direction = 'ltr';
    });
  }

  block.innerHTML = '';
  block.appendChild(wrapper);

  // Style buttons
  block.querySelectorAll('.button').forEach((btn) => {
    btn.classList.add('secondary');
  });
}
