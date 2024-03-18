// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.

const mainArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sum = 0;
let quantity = 0;
mainArray.forEach((item) => {
  if (item > 0) {
    sum += item;
    quantity++;
  }
});
console.log("Сумма положительных элементов " + sum);
console.log(quantity);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
let max = mainArray[0];
let newArrray = mainArray.filter((item) => {
  if (item > max) {
    max = item;
  }
});
console.log(max);
console.log(mainArray.indexOf(max));

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let min = mainArray[0];
mainArray.filter((item) => {
  if (item < min) {
    min = item;
  }
});
console.log(min);
console.log(mainArray.indexOf(min));

// 4. Визначити кількість негативних елементів.

let quantityNegative = 0;
mainArray.forEach((item) => {
  if (item < 0) {
    quantityNegative++;
  }
});
console.log(quantityNegative);

// 5. Знайти кількість непарних позитивних елементів.

let elementsQuantity = 0;
let newwArray = mainArray.filter((item) => {
  if (item > 0 && item % 2 !== 0) {
    elementsQuantity++;
  }
});
console.log(elementsQuantity);

// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.
