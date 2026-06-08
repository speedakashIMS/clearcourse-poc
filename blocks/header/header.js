import {
  loadSection,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
} from '../../scripts/aem.js';

export default async function decorate(block) {
  if (
    window.location.href.endsWith('nav.html')
        || window.location.href.endsWith('nav')
  ) return;

  const resp = await fetch('nav.plain.html');
  if (!resp.ok) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(await resp.text(), 'text/html');
  const main = doc.querySelector('main') || doc.body;

  decorateButtons(main);
  decorateIcons(main);
  decorateSections(main);
  decorateBlocks(main);

  main.querySelectorAll(':scope > .section').forEach((section) => {
    block.append(section);
  });

  const sections = [...block.querySelectorAll('.section')];
  for (const section of sections) {
    await loadSection(section);
  }
}
