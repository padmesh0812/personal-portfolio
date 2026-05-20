// ── LIGHTBOX ──
function openLightbox(img, title, sub) {
  document.getElementById('lb-img').src = img;
  document.getElementById('lb-title').textContent = title;
  document.getElementById('lb-sub').textContent = sub;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── RESUME DOWNLOAD ──
document.getElementById('resumeBtn').addEventListener('click', function () {
  const a = document.createElement('a');
  a.href = 'Padmesh_Kumar_Singh_Resume.pdf';
  a.download = 'Padmesh_Kumar_Singh_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// ── THEME TOGGLE ──
const themeBtn = document.getElementById('themeBtn');
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// ── ACTIVE NAV ON SCROLL ──
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let cur = '';
  document.querySelectorAll('section').forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

// ── FADE-UP ON SCROLL ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.animationPlayState = 'running'; });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => {
  el.style.animationPlayState = 'paused';
  obs.observe(el);
});
