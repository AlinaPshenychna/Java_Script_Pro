const sliderLine = document.querySelector(".slider-line");

let offset = 0;

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 640;
  if (offset > 1920) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 640;
  if (offset < 0) {
    offset = 1920;
  }
  sliderLine.style.left = -offset + "px";
});
