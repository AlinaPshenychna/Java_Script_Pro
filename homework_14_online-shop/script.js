//     В інформації товару - кнопка "купити".

//     При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
//     +ПІБ покупця
//     +Місто (вибір зі списку)
//     +Склад Нової пошти для надсилання
//     +Післяплати або оплати банківської картки
//    + Кількість продукції, що купується
//     +Коментар до замовлення

// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені.
//  Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

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
