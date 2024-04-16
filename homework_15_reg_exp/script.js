
const btnBuy = document.querySelector(".btn-buy");
const btnSend = document.querySelector(".btn-send");
const informForm = document.querySelector(".inform-form");
const postNumber = document.querySelector(".post-number");
const result = document.querySelector(".result");

btnBuy.addEventListener("click", function () {
  informForm.style.display = "flex";
});

informForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formObject = {};

  formData.forEach(function (value, key) {
    formObject[key] = value;
    result.style.display ="block";

    result.innerHTML = "";
    for (const key in formObject) {
      const value = formObject[key];
      const listItem = document.createElement("div");
      listItem.textContent = `${key}: ${value}`;
      result.appendChild(listItem);
    }
  });
});


//  +ПІБ
//     3 слова
//     кожне з великої букви

// Додати поля (+валідація)
// 1) +Телефон
//     від 10 до 13 цифр
//     можна використовувати лише +,цифри,-ікруглі дужки
// 2) email (+ валідація):
//     мінімум 5 символів
//     наявність @
//     наявність крапки після @


const inputPib = document.querySelector(".pib");
const error = document.querySelector(".error");
const patternPib = /^[А-Я]{1}[а-я]{2,}\s[А-Я]{1}[а-я]{2,}\s[А-Я]{1}[а-я]{2,}$/;


inputPib.addEventListener("blur", (event) => {
    const pib = event.target.value;
    const isPibValid = patternPib.test(pib);
    if (isPibValid) {
      error.textContent = "";
    } else {
      error.textContent = "Виникла помилка";
    }
  });


  const inputPhone = document.querySelector(".phone");
  const errorPhone = document.querySelector(".error-phone");
  const patternPhone = /^(380)[0-9]{9}$/;

    inputPhone.addEventListener("blur", (event) => {
      const phone = event.target.value;
      const isPhoneValid = patternPhone.test(phone);
      if (isPhoneValid) {
        errorPhone.textContent = "";
      }
       else {
        errorPhone.textContent = "Виникла помилка";
      }
    });



      const inputEmail = document.querySelector(".email");
      const errorEmail = document.querySelector(".error-email");
      const patternEmail = /^[a-z]{3,20}\@[a-z]{1,10}\.[a-z]{1,3}$/;

      inputEmail.addEventListener("blur", (event) => {
        const email = event.target.value;
        const isEmailValid = patternEmail.test(email);
        if (isEmailValid) {
          errorEmail.textContent = "";
        } else {
          errorEmail.textContent = "Виникла помилка";
        }
      });



