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

let min = mainArray[0];
mainArray.filter((item) => {
  if (item < min) {
    min = item;
  }
});
console.log(min);
console.log(mainArray.indexOf(min));

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let max = mainArray[0];
let newArrray = mainArray.filter((item) => {
  if (item > max) {
    max = item;
  }
});
console.log(max);
console.log(mainArray.indexOf(max));

// 4. Визначити кількість негативних елементів.

let quantityNegative = 0;
mainArray.forEach((item) => {
  if (item < 0) {
    quantityNegative++;
  }
});
console.log(quantityNegative);

// 5. Знайти кількість непарних позитивних елементів.

let newArray = mainArray.filter((item) => {
  if (item > 0 && item % 2 !== 0) {
    return item;
  }
});
console.log(newArray.length);

// 6. Знайти кількість парних позитивних елементів.
let newArrayPositive = mainArray.filter((item) => {
  if (item > 0 && item % 2 == 0) {
    return item;
  }
});
console.log(newArrayPositive.length);

// 7. Знайти суму парних позитивних елементів.

let sumPositiveElem = 0;
let positiveArray = mainArray.filter((item) => {
  if (item > 0 && item % 2 == 0) {
    sumPositiveElem += item;
  }
});
console.log("Сумма парных положительных элементов " + sumPositiveElem);

// 8 Знайти суму непарних позитивних елементів.

let sumElem = 0;
let negativeArray = mainArray.filter((item) => {
  if (item > 0 && item % 2 !== 0) {
    sumElem += item;
  }
});
console.log("Сумма непарных положительных элементов " + sumElem);

// 9 Знайти добуток позитивних елементів.

let multiElem = mainArray
  .filter((item) => item > 0)
  .reduce((acc, currentValue) => {
    return acc * currentValue;
  });
console.log("Произведение положительных элементов " + multiElem);

//10  Знайти найбільший серед елементів масиву, остальні обнулити.

let maxValue = mainArray[0];
mainArray.forEach((item) => {
  if (item > maxValue) {
    maxValue = item;
  }
});
let newwArray = mainArray.map((item) => {
  if (item !== maxValue) {
   return 0;
  }
  return maxValue;
});

console.log("Макс значение", maxValue);
console.log("После обнуления", newwArray);
