const body = document.body;
const themeButton = document.querySelector('#themeButton');
const lightbox = document.querySelector('#lightbox');
const openers = [
  document.querySelector('#openPreview'),
  document.querySelector('#openPreviewText'),
  document.querySelector('.character-image')
];
const closeButtons = lightbox.querySelectorAll('[data-close]');

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
closeButtons.forEach((button) => button.addEventListener('click', closePreview));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closePreview();
});
