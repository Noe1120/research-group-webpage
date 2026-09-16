const body = document.body;
const modeButtons = document.querySelectorAll('[data-mode]');
const previewButton = document.querySelector('#previewButton');
const lightbox = document.querySelector('#lightbox');
const closeButtons = document.querySelectorAll('[data-close]');
const petalField = document.querySelector('.petal-field');

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    body.classList.toggle('dark-preview', button.dataset.mode === 'dark');
    modeButtons.forEach((item) => item.classList.toggle('active', item === button));
  });
});

function openPreview() {
  lightbox.hidden = false;
  body.style.overflow = 'hidden';
}

function closePreview() {
  lightbox.hidden = true;
  body.style.overflow = '';
}

previewButton.addEventListener('click', openPreview);
closeButtons.forEach((button) => button.addEventListener('click', closePreview));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closePreview();
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let index = 0; index < 16; index += 1) {
    const petal = document.createElement('i');
    petal.className = 'petal';
    petal.style.setProperty('--left', `${Math.random() * 100}vw`);
    petal.style.setProperty('--size', `${7 + Math.random() * 8}px`);
    petal.style.setProperty('--duration', `${11 + Math.random() * 9}s`);
    petal.style.setProperty('--delay', `${-Math.random() * 18}s`);
    petal.style.setProperty('--sway', `${-60 + Math.random() * 120}px`);
    petal.style.setProperty('--sway-back', `${-50 + Math.random() * 100}px`);
    petalField.appendChild(petal);
  }
}
