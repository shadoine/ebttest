const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

function toggleMenu(el){
  document.querySelector('.mobile-menu').classList.toggle('show');
  el.classList.toggle('active');
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('show');
    document.querySelector('.hamburger').classList.remove('active');
  });
});
