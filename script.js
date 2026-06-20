let currentSlide = 0;
const track = document.getElementById('carousel-track');
const slides = track ? track.children : [];

function showSlide(index) {
  if (!track) return;
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

window.addEventListener('scroll', () => {
  const homeButton = document.getElementById('home-button');
  if (!homeButton) return;

  if (window.scrollY > 200) {
    homeButton.classList.remove('hidden');
  } else {
    homeButton.classList.add('hidden');
  }
});
