// 1. Створити клас Людина.

//     Властивості:
//     імʼя;
//     стать.
//     Методи:
//     конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.

//     Властивості:
//     конструктор не потрібен;
//     масив жителів, який при створенні пустий.
//     Методи:
//     додати жителя - метод повинен приймати екземпляр класу Людина,
// та додавати до масиву жителів.

// 3. Створити клас Будинок.

//     Властивості:
//     масив квартир, який при створенні пустий;
//     максимальна кількість квартир.
//     Методи:
//     конструктор, який приймає один параметр: максимальну кількість квартир;
//     додати квартиру - метод повинен приймати екземпляр класу Квартира,
// перевіряти, чи не буде кількість перевищувати максимальну кількість квартир,
//  і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне
//   повідомлення.

// В якості демонстраціїї створити:

//     декілька екземплярів класу Людина;
//     декілька екземплярів класу Квартира;
//     додадити екземпляри класу Людина до екземплярів класу Квартира;
//     екземпляр класу Будинок;
//     додадити екземпляри класу Квартира до екземплярів класу Будинок.

function human(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Flat() {
  this.residents = [];
  this.addResident = function (human) {
    this.residents.push(human);
  };
}

function House(maxApartment) {
  this.apartments = [];
  this.maxApartment = maxApartment;
  this.addApartment = function (flat) {
    if (this.apartments.length < this.maxApartment) {
      this.apartments.push(flat);
    } else {
      console.log("Максимальна кількість квартир");
    }
  };
}

const human1 = new human("Lana", "female");
const human2 = new human("Taras", "male");

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(human1);
flat2.addResident(human2);

const house = new House(5);

house.addApartment(flat1);
house.addApartment(flat2);

console.log(human1);
console.log(human2);
console.log(flat1);
console.log(flat2);
