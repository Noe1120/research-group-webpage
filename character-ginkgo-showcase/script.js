const lightbox = document.querySelector('#lightbox');
const leafField = document.querySelector('.leaf-field');
const openers = [
  document.querySelector('#openPreview'),
  document.querySelector('#openPreviewText'),
  document.querySelector('.character-image')
];

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const leafCount = window.matchMedia('(max-width: 560px)').matches ? 9 : 15;
  for (let index = 0; index < leafCount; index += 1) {
    const leaf = document.createElement('i');
    const sway = -60 + Math.random() * 120;
    leaf.className = 'leaf';
    leaf.style.setProperty('--left', `${Math.random() * 100}%`);
    leaf.style.setProperty('--size', `${13 + Math.random() * 13}px`);
    leaf.style.setProperty('--duration', `${11 + Math.random() * 9}s`);
    leaf.style.setProperty('--delay', `${-Math.random() * 18}s`);
    leaf.style.setProperty('--sway', `${sway}px`);
    leaf.style.setProperty('--sway-back', `${-sway * .6}px`);
    leaf.style.setProperty('--opacity', `${.28 + Math.random() * .34}`);
    leafField.appendChild(leaf);
  }
}

function openPreview() {
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.close-button').focus();
}

function closePreview() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  document.querySelector('#openPreviewText').focus();
}

openers.forEach((opener) => opener.addEventListener('click', openPreview));
lightbox.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', closePreview));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closePreview();
});
