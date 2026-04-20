const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(item => item.classList.remove('active'));
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
