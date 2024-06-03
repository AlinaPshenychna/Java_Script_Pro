function* Foo() {
  console.log("start");
  yield 1;
  yield 2;
  yield 3;
  console.log("finish");
}

const iteratorFoo = Foo();
console.log(iteratorFoo.next());
console.log(iteratorFoo.next().done);

function Boo() {
  let count = 0;
  return {
    next() {
      if (count < 3) {
        count++;
        return { value: count, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const iteratorBoo = Boo();
console.log(iteratorBoo.next());
console.log(iteratorBoo.next().done);
