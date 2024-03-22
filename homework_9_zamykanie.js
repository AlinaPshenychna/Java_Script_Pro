function getCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
let count1 = getCounter();

console.log(count1);
console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2
