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
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    // Wenn die Karte schon aktiv ist → deaktiviere
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      card.querySelector('.description').textContent = "Hier klicken für Details";
    } else {
      // Entferne aktive Klasse von allen Karten
      serviceCards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.description').textContent = "Hier klicken für Details";
      });

      // Aktiviere die geklickte Karte
      card.classList.add('active');
      const desc = card.getAttribute('data-description');
      card.querySelector('.description').textContent = desc;
    }
  });
});
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-back');
  });
});
