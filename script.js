const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-back');
  });
});
/* Mobile scroll-based service card expansion */
if (window.matchMedia("(max-width: 768px)").matches) {
  const mobileServiceObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const card = entry.target;
        if (entry.isIntersecting) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.6 // card must be mostly visible
    }
  );

  document.querySelectorAll(".service-card").forEach(card => {
    mobileServiceObserver.observe(card);
  });
}


function toggleMenu(el){
  document.querySelector('.mobile-menu').classList.toggle('show');
  el.classList.toggle('active');
}


document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.remove('show');      // Menü schließen
    hamburger.classList.remove('active'); // Hamburger zurücksetzen
  });
});
