const character = document.querySelector('#heroCharacter');
const hero = document.querySelector('.hero');
const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');

hero.addEventListener('pointermove', (event) => {
  if (window.matchMedia('(max-width: 600px)').matches) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;
  character.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
hero.addEventListener('pointerleave', () => { character.style.transform = ''; });

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.textContent = open ? '×' : '☰';
});

const channelContent = {
  research: { code: 'CHANNEL / 01', symbol: '⌘', title: '将一篇论文<br>拆成可运行的实验', text: '她会标记关键假设、复现核心结果，再把过程整理成下一位研究者可以继续使用的记录。' },
  signal: { code: 'CHANNEL / 02', symbol: '⌁', title: '从杂乱的数据里<br>捕捉微弱的信号', text: '无论是模型输出还是网络流量，她都会先寻找异常模式，再用更严格的实验确认直觉。' },
  team: { code: 'CHANNEL / 03', symbol: '✦', title: '让一个人的问题<br>成为一群人的发现', text: '她相信研究不应该困在个人文件夹里。分享过程、接受质疑，也把失败留给后来者参考。' }
};

document.querySelectorAll('.channel-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.channel-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const item = channelContent[tab.dataset.channel];
    const display = document.querySelector('#channelDisplay');
    display.querySelector('.display-code').textContent = item.code;
    display.querySelector('.display-symbol').textContent = item.symbol;
    display.querySelector('h3').innerHTML = item.title;
    display.querySelector('p').textContent = item.text;
  });
});

const petalField = document.querySelector('#petalField');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const count = window.matchMedia('(max-width: 600px)').matches ? 10 : 17;
  for (let index = 0; index < count; index += 1) {
    const petal = document.createElement('i');
    petal.className = 'petal';
    petal.style.setProperty('--left', `${Math.random() * 100}vw`);
    petal.style.setProperty('--size', `${7 + Math.random() * 9}px`);
    const sway = -55 + Math.random() * 110;
    petal.style.setProperty('--sway', `${sway}px`);
    petal.style.setProperty('--sway-back', `${-sway * 0.5}px`);
    petal.style.setProperty('--duration', `${11 + Math.random() * 9}s`);
    petal.style.setProperty('--delay', `${-Math.random() * 18}s`);
    petal.style.setProperty('--opacity', `${0.2 + Math.random() * 0.3}`);
    petalField.appendChild(petal);
  }
}

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('#mainNav a')];
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));
