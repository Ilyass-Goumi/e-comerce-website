// Sélection des éléments
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle du menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// trotinettes
// Changer l'image principale quand on clique sur une miniature
const slide = document.querySelector('.product-slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let counter = 0;
const totalImages = slide.children.length;
const visibleImages = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;

function updateSlide() {
  const moveX = -(counter * (100 / visibleImages));
  slide.style.transform = `translateX(${moveX}%)`;
}

nextBtn.addEventListener('click', () => {
  if (counter < totalImages - visibleImages) {
    counter++;
    updateSlide();
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    updateSlide();
  }
});

// Mise à jour responsive au redimensionnement
window.addEventListener('resize', updateSlide);
























// loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Ajoute la classe fade-out
    loader.classList.add("fade-out");

    // Supprime le loader après l'animation
    setTimeout(() => {
        loader.style.display = "none";
    }, 10);
});
