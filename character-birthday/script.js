const lightbox = document.querySelector('#lightbox');
const openButtons = [document.querySelector('#viewButton'), document.querySelector('#artworkButton')];
const closeButtons = document.querySelectorAll('[data-close]');
const confettiField = document.querySelector('.confetti-field');

function openLightbox() {
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

openButtons.forEach((button) => button.addEventListener('click', openLightbox));
closeButtons.forEach((button) => button.addEventListener('click', closeLightbox));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const colors = ['#f24886', '#f7df68', '#9e8bea', '#6fc6c1'];
  for (let index = 0; index < 18; index += 1) {
    const confetti = document.createElement('i');
    confetti.className = 'confetti';
    confetti.style.setProperty('--left', `${Math.random() * 100}vw`);
    confetti.style.setProperty('--width', `${5 + Math.random() * 5}px`);
    confetti.style.setProperty('--height', `${9 + Math.random() * 7}px`);
    confetti.style.setProperty('--color', colors[index % colors.length]);
    confetti.style.setProperty('--duration', `${11 + Math.random() * 9}s`);
    confetti.style.setProperty('--delay', `${-Math.random() * 18}s`);
    confetti.style.setProperty('--sway', `${-65 + Math.random() * 130}px`);
    confetti.style.setProperty('--sway-back', `${-55 + Math.random() * 110}px`);
    confettiField.appendChild(confetti);
  }
}
