// Створити клас SuperMath.
//  Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
// Метод повинен підтвердити у користувача через confirm вивесті на екран, чи хоче він
//  зробити дію znak c Х і У. Якщо хоче,
// зробити математичну дію znak (яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.
// Приклад об'єкта: `obj = {X:12, Y:3, znak: "/"}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

class SuperMath {
  check(obj) {
    const operators = ["+", "-", "/", "*", "%"];
    const confirmQuestion = `Чи хочете зробити дію ${obj.X} ${obj.znak} ${obj.Y}?`;
    if (confirm(confirmQuestion)) {
      if (operators.includes(obj.znak)) {
        let result;
        switch (obj.znak) {
          case "+":
            result = obj.X + obj.Y;
            break;
          case "-":
            result = obj.X - obj.Y;
            break;
          case "/":
            result = obj.X / obj.Y;
            break;
          case "*":
            result = obj.X * obj.Y;
            break;
          case "%":
            result = obj.X % obj.Y;
            break;
          default:
            result = "Error";
        }
        console.log(`Результат: ${result}`);
      } else {
        console.log("Невірний оператор. Доступні тільки: + - / * %");
      }
    } else {
      this.input();
    }
  }
  input() {
    const X = parseFloat(prompt("Введіть X:"));
    const Y = parseFloat(prompt("Введіть Y:"));
    const znak = prompt("Введіть операцію (+ - / * %):");
    this.check({ X, Y, znak });
  }
}
const math = new SuperMath();
math.check({
  X: 12,
  Y: 10,
  znak: "+",
});
