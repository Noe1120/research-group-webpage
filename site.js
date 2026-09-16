const body = document.body;
const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

function createPetalField() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layer = document.createElement('div');
  layer.className = 'petal-field';
  layer.setAttribute('aria-hidden', 'true');
  const petalCount = window.matchMedia('(max-width: 580px)').matches ? 10 : 18;

  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement('i');
    const size = 8 + Math.random() * 9;
    const sway = -55 + Math.random() * 110;
    petal.className = 'falling-petal';
    petal.style.setProperty('--petal-left', `${Math.random() * 100}vw`);
    petal.style.setProperty('--petal-size', `${size}px`);
    petal.style.setProperty('--petal-duration', `${10 + Math.random() * 10}s`);
    petal.style.setProperty('--petal-delay', `${-Math.random() * 18}s`);
    petal.style.setProperty('--petal-sway', `${sway}px`);
    petal.style.setProperty('--petal-sway-back', `${-sway * 0.55}px`);
    petal.style.setProperty('--petal-opacity', `${0.22 + Math.random() * 0.35}`);
    layer.appendChild(petal);
  }

  document.body.prepend(layer);
}

if (localStorage.getItem('research-theme') === 'dark') body.classList.add('dark');
const syncThemeIcon = () => { if (themeToggle) themeToggle.textContent = body.classList.contains('dark') ? '☾' : '☼'; };
themeToggle?.addEventListener('click', () => { body.classList.toggle('dark'); localStorage.setItem('research-theme', body.classList.contains('dark') ? 'dark' : 'light'); syncThemeIcon(); });
menuToggle?.addEventListener('click', () => { const open = mainNav.classList.toggle('nav-open'); menuToggle.textContent = open ? '×' : '☰'; menuToggle.setAttribute('aria-expanded', String(open)); });
syncThemeIcon();
createPetalField();

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  button.closest('[data-filter-group]')?.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('[data-category]').forEach((card) => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
