/**
 * loads and decorates the logos block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const items = [...block.querySelectorAll(':scope > div > div')];
  const strip = document.createElement('div');
  strip.classList.add('logos-strip');

  items.forEach((item) => {
    const logo = document.createElement('div');
    logo.classList.add('logos-item');
    logo.innerHTML = item.innerHTML;
    strip.appendChild(logo);
  });

  block.innerHTML = '';
  block.appendChild(strip);
}
