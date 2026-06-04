export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  if (!rows.length) return;

  // Support two authoring layouts:
  //   A) One row, two columns: | image | text |
  //   B) Two rows, one column each: row0 = image, row1 = text
  const firstRowCells = [...rows[0].children];
  const isTwoColumn = firstRowCells.length >= 2;

  const mediaCell = isTwoColumn ? firstRowCells[0] : rows[0]?.children[0];
  const textCell = isTwoColumn ? firstRowCells[1] : rows[1]?.children[0];

  const wrapper = document.createElement('div');
  wrapper.classList.add('text-image-inner');

  const media = document.createElement('div');
  media.classList.add('text-image-media');
  if (mediaCell) media.append(...mediaCell.childNodes);

  const text = document.createElement('div');
  text.classList.add('text-image-text');
  if (textCell) text.append(...textCell.childNodes);

  // Default: image left, text right. "reverse" variant: text left, image right.
  if (block.classList.contains('reverse')) {
    wrapper.appendChild(text);
    wrapper.appendChild(media);
  } else {
    wrapper.appendChild(media);
    wrapper.appendChild(text);
  }

  block.innerHTML = '';
  block.appendChild(wrapper);

  block.querySelectorAll('.button').forEach((btn) => {
    btn.classList.remove('primary');
    btn.classList.add('secondary');
  });
}
