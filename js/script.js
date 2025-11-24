const body = document.body;
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const themeMeta = document.getElementById('theme-color-meta');
const heroSection = document.querySelector('.left, .right');
const projectsSection = document.querySelector('.projects');
const projectsLink = document.querySelector('.nav-links a:first-child');
const backArrow = document.querySelector('.back-arrow');

// Theme toggle logic
function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
    themeMeta.setAttribute('content', '#111111');
  } else {
    body.classList.remove('dark');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
    themeMeta.setAttribute('content', '#f8f8f8');
  }
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDark ? 'dark' : 'light');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  setTheme(e.matches ? 'dark' : 'light');
});

lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));

// Smooth section transitions
projectsLink.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.left').style.display = 'none';
    document.querySelector('.right').style.display = 'none';
    projectsSection.style.display = 'flex';
    body.classList.remove('fade-out');
    projectsSection.classList.add('fade-in');
  }, 600);
});

backArrow.addEventListener('click', () => {
  projectsSection.classList.remove('fade-in');
  body.classList.add('fade-out');
  setTimeout(() => {
    projectsSection.style.display = 'none';
    document.querySelector('.left').style.display = 'flex';
    document.querySelector('.right').style.display = 'flex';
    body.classList.remove('fade-out');
  }, 600);
});
