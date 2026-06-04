/**
 * loads and decorates the cta block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.classList.add('cta-inner');

  rows.forEach((row) => {
    [...row.children].forEach((cell) => {
      wrapper.append(...cell.childNodes);
    });
  });

  block.innerHTML = '';
  block.appendChild(wrapper);

  block.querySelectorAll('.button').forEach((btn) => {
    btn.classList.add('primary');
  });
}
