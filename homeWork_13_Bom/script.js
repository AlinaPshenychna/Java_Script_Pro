// Створити декілька сторінок ( окремі html файли ):

//     +login page (2 текстових поля і кнопка для підтвердження)
//     +login - я, як юзер, хочу клікнути на цю кнопку та перейти в мій профіль.
//     +за допомогою setTimeout через 2 секунди перекините на profile сторінку
//     +ці 2 секунди повинен крутитись лоадер
//     вивести в консоль значення з email + password
//     +email просто поле для вводу
//     +password просто поле для вводу

//     my-profile page
//     дістати дані про розмір screen юзера і вивести у консоль
//     додати кнопку з текстом back, по кліку на цю кнопку переходимо назад на login сторінку ( не можна використовувати <a> )

//     TO BE A HERO (optional) - взяти поточну локацію юзера і за допомогою google maps api вивести в консоль адресу користувача.

const button = document.querySelector("button");
button.setAttribute("disabled", true);
const inputEmail = document.querySelector(".input-email");
const error = document.querySelector(".error");
const inputPassword = document.querySelector(".input-password");

inputEmail.onblur = function () {
  if (!inputEmail.value.includes("@" && ".")) {
    inputEmail.classList.add("invalid");
    error.textContent = "Пожалуйста, введите правильный Email";
  }
};

inputEmail.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.textContent = "";
  }
};

inputEmail.oninput = inputPassword.oninput = function () {
  if (inputPassword.value.length < 5 || inputEmail.value.length < 5) {
    button.setAttribute("disabled", true);
  } else {
    button.removeAttribute("disabled");
  }
};

button.addEventListener("click", function () {
  let spinner = document.querySelector(".spinner");
  spinner.style.display = "block";
  setTimeout(() => {
    location.href = "profile_page.html";
  }, 2000);
});
