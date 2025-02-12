// generator that run one by one
// not run the complete function in one go

function* generate() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generate();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
