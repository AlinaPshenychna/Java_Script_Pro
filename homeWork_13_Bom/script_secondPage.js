const buttonSecond = document.querySelector(".button-second");
const btnScreen = document.querySelector(".btn-screen-size");

buttonSecond.addEventListener("click", function () {
  setTimeout(() => {
    history.back();
  }, 1000);
});

btnScreen.addEventListener("click", function () {
  console.log(screen);
});
