const slides = [
  {
    text: {
      title: "Clinic & Beauty Consultant",
      description:
        "It is a long established fact that a reader will be by the readable content of a page.",
    },
    image: "./assets/slider.svg",
  },
  {
    text: {
      title: "Advanced Skin Care",
      description:
        "Professional and personalized beauty services for your skin needs.",
    },
    image: "./assets/slider.svg",
  },
  {
    text: {
      title: "Modern Treatment Techniques",
      description: "Get the best care with advanced technology and expertise.",
    },
    image: "./assets/slider.svg",
  },
];

let currentIndex = 0;

const titleEl = document.querySelector(".slider__text h2");
const descriptionEl = document.querySelector(".slider__text p");
const imageEl = document.querySelector(".slider__image img");
const dots = document.querySelectorAll(".dot");

function updateSlide() {
  // Update text and image
  titleEl.textContent = slides[currentIndex].text.title;
  descriptionEl.textContent = slides[currentIndex].text.description;
  imageEl.src = slides[currentIndex].image;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

updateSlide(); // Initialize the first slide
