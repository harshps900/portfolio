// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Intersection Observer for reveal animations
const reveals = document.querySelectorAll('.reveal');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
}, options);
reveals.forEach(reveal => {
  // Initial state: hidden and slightly shifted down
  reveal.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
  observer.observe(reveal);
});
