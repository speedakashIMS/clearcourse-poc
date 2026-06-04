export default function decorate(block) {
  const row = block.querySelector(':scope > div');
  if (!row) return;

  const cells = [...row.children];
  const wrapper = document.createElement('div');
  wrapper.classList.add('text-image-inner');

  const media = document.createElement('div');
  media.classList.add('text-image-media');
  if (cells[0]) media.append(...cells[0].childNodes);

  const text = document.createElement('div');
  text.classList.add('text-image-text');
  if (cells[1]) text.append(...cells[1].childNodes);

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
