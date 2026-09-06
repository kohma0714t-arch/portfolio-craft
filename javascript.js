// ===== Navbar scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Scroll reveal =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== QR Modal =====
const qrModal = document.getElementById('qrModal');
const qrImage = document.getElementById('qrImage');
const qrAppName = document.getElementById('qrAppName');
const qrClose = document.getElementById('qrClose');

const appData = {
  studystack: {
    name: 'Study Stack',
    qr: 'images/StudyStackQR.png'
  },
  timesc: {
    name: 'わかりやすい時間割',
    qr: 'images/TimeScQR.png'
  }
};

// Open modal when work card is clicked
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => {
    const appKey = card.dataset.app;
    const data = appData[appKey];
    if (data) {
      qrAppName.textContent = data.name;
      qrImage.src = data.qr;
      qrImage.alt = data.name + ' QRコード';
      qrModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal
function closeModal() {
  qrModal.classList.remove('active');
  document.body.style.overflow = '';
}

qrClose.addEventListener('click', closeModal);

qrModal.addEventListener('click', (e) => {
  if (e.target === qrModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
