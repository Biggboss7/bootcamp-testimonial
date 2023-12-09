const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#previousBtn");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
};

const next = function () {
  if (currentSlide === slides.length - 1) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
};

const prev = function () {
  if (currentSlide === 0) currentSlide = slides.length - 1;
  else currentSlide--;

  goToSlide(currentSlide);
};

goToSlide(currentSlide);

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

console.log(document.documentElement.clientWidth);
