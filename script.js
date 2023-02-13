const myCarousel = document.querySelector(".carousel-inner");

const carousel = new bootstrap.Carousel(myCarousel, {
  cycle: true,
  interval: 5000,
  touch: false,
});
