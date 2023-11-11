const next = document.querySelector(".uil-arrow-right");
const prev = document.querySelector(".uil-arrow-left");

const slides = document.querySelectorAll(".card-item");
// console.log(slide);
let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

const goNext = () => {
  counter++;
  slideItem();
};

const goPrev = () => {
  counter--;
  slideItem();
};

const slideItem = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translate(${counter * 50}%)`;
  });
};
