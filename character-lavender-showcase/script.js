const body = document.body;
const themeButton = document.querySelector('#themeButton');
const lightbox = document.querySelector('#lightbox');
const petalField = document.querySelector('.petal-field');
const openers = [
  document.querySelector('#openPreview'),
  document.querySelector('#openPreviewText'),
  document.querySelector('.character-image')
];

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const petalCount = window.matchMedia('(max-width: 560px)').matches ? 9 : 15;
  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement('i');
    const sway = -55 + Math.random() * 110;
    petal.className = 'petal';
    petal.style.setProperty('--left', `${Math.random() * 100}%`);
    petal.style.setProperty('--size', `${8 + Math.random() * 9}px`);
    petal.style.setProperty('--duration', `${11 + Math.random() * 9}s`);
    petal.style.setProperty('--delay', `${-Math.random() * 18}s`);
    petal.style.setProperty('--sway', `${sway}px`);
    petal.style.setProperty('--sway-back', `${-sway * .6}px`);
    petal.style.setProperty('--opacity', `${.22 + Math.random() * .32}`);
    petalField.appendChild(petal);
  }
}

themeButton.addEventListener('click', () => {
  const night = body.classList.toggle('night');
  themeButton.setAttribute('aria-pressed', String(night));
});

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
