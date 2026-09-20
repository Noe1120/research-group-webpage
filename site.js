const body = document.body;
const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const easterEggAnswer = 'ky是科协的，他很帅';

function openHiddenEasterEgg(event) {
  event.preventDefault();
  event.stopPropagation();

  const answer = window.prompt('隐藏彩蛋');
  if (answer?.trim() === easterEggAnswer) {
    window.location.href = new URL('cartoon-cycling.html', document.baseURI).href;
  }
}

document.querySelectorAll('.site-footer .brand-mark').forEach((trigger) => {
  trigger.setAttribute('aria-label', '打开隐藏彩蛋');
  trigger.addEventListener('click', openHiddenEasterEgg);
});

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

let savedTheme = null;
try { savedTheme = window.localStorage.getItem('research-theme'); } catch (error) { /* file:// pages may block storage access. */ }
if (savedTheme === 'dark') body.classList.add('dark');
const syncThemeIcon = () => { if (themeToggle) themeToggle.textContent = body.classList.contains('dark') ? '☾' : '☼'; };
themeToggle?.addEventListener('click', () => { body.classList.toggle('dark'); try { window.localStorage.setItem('research-theme', body.classList.contains('dark') ? 'dark' : 'light'); } catch (error) { /* file:// pages may block storage access. */ } syncThemeIcon(); });
menuToggle?.addEventListener('click', () => { const open = mainNav.classList.toggle('nav-open'); menuToggle.textContent = open ? '×' : '☰'; menuToggle.setAttribute('aria-expanded', String(open)); });
syncThemeIcon();
createPetalField();

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  button.closest('[data-filter-group]')?.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('[data-category]').forEach((card) => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));

function setupSakuraEasterEgg() {
  const motif = document.querySelector('.sakura-motif');
  if (!motif) return;

  const flowers = [...motif.querySelectorAll('use[href="#member-sakura-flower"]')]
    .sort((left, right) => Number(left.getAttribute('x')) - Number(right.getAttribute('x')));
  if (flowers.length !== 5) return;

  const sequence = [1, 1, 4, 5, 1, 4];
  const input = [];
  motif.removeAttribute('aria-hidden');
  motif.setAttribute('aria-label', '樱花枝装饰，包含五个隐藏按钮');

  function recordFlower(index) {
    input.push(index);

    while (
      input.length > 0
      && !input.every((value, position) => value === sequence[position])
    ) {
      input.shift();
    }

    if (input.length === sequence.length) {
      window.location.href = new URL('character-pink-office-showcase/index.html', document.baseURI).href;
    }
  }

  flowers.forEach((flower, position) => {
    const index = position + 1;
    const namespace = 'http://www.w3.org/2000/svg';
    const button = document.createElementNS(namespace, 'g');
    const hitArea = document.createElementNS(namespace, 'circle');
    const x = flower.getAttribute('x');
    const y = flower.getAttribute('y');

    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.setAttribute('aria-label', `从左到右第${index}朵花`);
    button.style.cursor = 'pointer';
    button.style.outline = 'none';
    button.style.webkitTapHighlightColor = 'transparent';
    hitArea.setAttribute('cx', x);
    hitArea.setAttribute('cy', y);
    hitArea.setAttribute('r', '27');
    hitArea.setAttribute('fill', 'transparent');
    hitArea.setAttribute('pointer-events', 'all');

    button.append(hitArea, flower);
    motif.append(button);
    button.addEventListener('click', () => recordFlower(index));
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      recordFlower(index);
    });
  });
}

setupSakuraEasterEgg();
