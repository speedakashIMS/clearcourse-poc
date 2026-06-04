/**
 * loads and decorates the hero block
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // Build structure
  const bg = document.createElement('div');
  bg.classList.add('hero-bg');

  const content = document.createElement('div');
  content.classList.add('hero-content');

  const textDiv = document.createElement('div');
  textDiv.classList.add('hero-text');

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('hero-image');

  // Row 0 → background image
  if (rows[0]) {
    const pic = rows[0].querySelector('picture');
    if (pic) bg.appendChild(pic);
    rows[0].remove();
  }

  // Row 1 → heading + body + button
  if (rows[1] || rows[0]) {
    const textRow = rows[1] || rows[0];
    [...textRow.querySelectorAll(':scope > div')].forEach((cell) => {
      textDiv.append(...cell.childNodes);
    });
    textRow.remove();
  }

  // Row 2 → hero image
  if (rows[2]) {
    const pic = rows[2].querySelector('picture, img');
    if (pic) imageDiv.appendChild(pic);
    rows[2].remove();
  }

  content.appendChild(textDiv);
  if (imageDiv.hasChildNodes()) content.appendChild(imageDiv);

  block.innerHTML = '';
  block.appendChild(bg);
  block.appendChild(content);

  // Style buttons
  block.querySelectorAll('.button').forEach((btn) => {
    btn.classList.add('primary');
  });
}
