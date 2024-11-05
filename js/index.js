const images = document.querySelectorAll(".slider__image");
const totalImages = images.length;
let currentIndex = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector(
    ".slider__container"
  ).style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to first image after last
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to last image before first
  updateSlider();
});
