document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const carousel = document.getElementById("carousel");

  let currentPosition = 1;

  nextBtn.addEventListener("click", function () {
    currentPosition = (currentPosition % 5) + 1;
    updateCarouselPosition();
  });

  prevBtn.addEventListener("click", function () {
    currentPosition = currentPosition - 1 <= 0 ? 5 : currentPosition - 1;
    updateCarouselPosition();
  });

  function updateCarouselPosition() {
    carousel.style.setProperty("--position", currentPosition);
  }
});

