// Renew Plus — site interactions

// Render Lucide icons
lucide.createIcons();

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Shadow on nav once scrolled
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const panel = document.getElementById('mobilePanel');
document.getElementById('menuToggle').addEventListener('click', () => panel.classList.toggle('open'));
panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => panel.classList.remove('open')));
