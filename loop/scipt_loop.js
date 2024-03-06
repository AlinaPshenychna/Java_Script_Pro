// // 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let string = "";

for (let i = 20; i <= 30; i = i + 0.5) {
  string += `${i}, `;
}
let str = string.slice(0, -2);
console.log(str);

// // 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let dollar = 27;
for (let i = 10; i <= 100; i = i + 10) {
  console.log(`${dollar}$ * ${i} = ${dollar * i}$`);
}

// // 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const number = 36;

for (let i = 1; i < 100; i++) {
  if (i ** 2 <= number) {
    console.log(i);
  }
}

// //4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// for (let i = 2; i <= mainNumber; i++) {
//   if (mainNumber % i === 0 ? console.log("not simple number") : console.log("Yes, it's a simple number"));
//   break;
// }

//  тільки тут треба ввести якусь окрему змінну, яка буде мінятись з true на false.
// А вже пісял цикла виводити повідомлення з змінною isPrime

// const mainNumber = 20;
// let isPrime = true;
// for (let i = 2; i <= mainNumber- 1; i++) {
//  if (mainNumber% i === 0) {
//   isPrime = false;
//   break;
//  }
//  console.log(isPrime);
// }

//  Далі також вводимо змінну, змінюєм по умові всередині цикла, а лог виводимо після цикла

// // 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let data = 81;
isPrime = false;
for (let i = 1; i <= data; i++) {
  if (3 ** i === data) {
   isPrime = true;
    continue;
  }
  console.log(isPrime);
}
