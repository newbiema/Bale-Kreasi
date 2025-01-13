
// Toggle menu visibility for mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


const carousel = document.getElementById('testimonial-carousel');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let scrollAmount = 0;
const scrollStep = 320; // Width of each testimonial + margin

nextBtn.addEventListener('click', () => {
  scrollAmount += scrollStep;
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= scrollStep;
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});