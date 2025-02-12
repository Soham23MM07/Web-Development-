// Funtions in Javascript

//* / Remember
// In function arguments are passed and parameters are defined in the signature of the function */

// function greet(typename) {
//   return `Making ${typename}`;
// }

// let gre = greet(prompt("Enter name of tea"));
// console.log(gre);

// function orderTea() {
//   function confirmOrder() {
//     return `order confirm for chai`;
//   }
//   return confirmOrder();
// }

// let gr = orderTea();
// console.log(gr);

// Arrow Function

// one way

// const greet = (price, quantity) => {
//   return price * quantity;
// };
// console.log(greet(34, 64));

// if i have only one line of code
// const greet = (price, quantity) => price * quantity;
// console.log(greet(34, 64));

// Higher order function

// function is passed into the another function
// best example is for each loop

// function createMaker(tea) {
//   return tea();
// }

// function Maketea() {
//   return `Making tea`;
// }

// console.log(createMaker(Maketea));

// Nested Function
// function processGame(tea) {
//   return function Game(params) {
//     return `Making game ${params} ${tea}`;
//   };
// }

// let taker = processGame("soham"); //--> taker is function
// // console.log(taker); --> return function game
// let greet = taker("soham");
// console.log(greet);

// function processGame(tea) {
//   return function Game(params) {
//     return function NewGame(par) {
//       return `Making game ${params} ${tea} ${par}`;
//     };
//   };
// }

// let taker = processGame("Anil"); //--> taker is function
// // console.log(taker); --> return function game
// let greet = taker("soham");
// // console.log(greet); //--> return function
// let gre = greet("Ghag");
// // console.log(gre); --> return the final thing

// // Remeber inside function can access anything

/* Create a function filterEvenNumbers(arr) using filter() and arrow functions */

// let arr = [1, 2, 3, 4, 5, 6, 8];
// let filterEvenNumbers = (arr) => {
//   let arr1 = arr.filter((x) => {
//     return x % 2 === 0;
//   });
//   return arr1;
// };

// let greet = filterEvenNumbers(arr);
// console.log(greet);

/* Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
 */

// let sum = 0;
// let arr = [1, -2, -3, 4, -5, 6, 8];
// let sumPositiveNumbers = (arr) => {
//   let arr1 = arr.filter((x) => x > 0);

//   let value = arr1.reduce((sum, x) => {
//     //----> sum is accumulator and it initial value is 0
//     return sum + x;
//   }, 0);
//   return value;
// };

// let greet = sumPositiveNumbers(arr);
// console.log(greet);

/* Write a function squareNumbers(arr) using map() and arrow functions */

// let arr = [1, -2, -3, 4, -5, 6, 8];

// function squareNumbers(x) {
//   return x.map((x) => {
//     return x * x;
//   });
// }
// let greet = squareNumbers(arr);
// console.log(greet);

/* 
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions */

// let arr = [{ name: "John" }, { name: "Jane" }, { name: "Mike" }];

// function getNames(arr) {
//   return arr.map((x) => {
//     return x;
//   });
// }

// let greet = getNames(arr);
// console.log(greet);

/* Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function */

// let arr = ["soham", "anil", "ghag", "sdfhspfh"];

// function findLongestWord(arr) {
//   return arr.reduce((acc, x) => {
//     if (x.length > acc.length) {
//       return x;
//     }
//     return acc;
//   }, "");
// }

// let greet = findLongestWord(arr);
// console.log(greet);

/* Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer() */

// function outer() {
//   return function inner() {
//     return `Inner function called`;
//   };
// }

// let taker = outer();
// console.log(taker());

// Create an object person with a method introduce() that uses this
// additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

let person = {
  name: "soham",
  age: 19,
  introduce: function () {
    // console.log(this); //--> it will logs to person
    console.log(
      `Hi, my name is ${this.name} and I am ${this.age} years old on calling `
    );
  },
};

person.introduce();
console.log(person.name);
console.log(person["name"]);

person.hello = "soham";
person.yello = 49;
person["mello"] = 43;

console.log(person);

// this refers to different objects based on where it is used.
// Inside an object method, it refers to the object itself.
// In regular functions, it refers to the global object (window in browsers).
// In arrow functions, it inherits this from the surrounding context.
// In constructor functions or classes, it refers to the instance of the object being created

// for regular function it is refers to the global object
// function name(params) {
//   console.log(this);
// }

// for arrow function
// arrow this inherits for the surrounding
// let person = {
//   name: "Hitesh",
//   greet: function () {
//     const arrowFunc = () => {
//       console.log(this); // Inherits `this` from `greet()`, which is the `person` object
//       console.log(this.name); // Logs the `name` property of `person`
//     };
//     arrowFunc();
//   },
// };

// for object it inherits from object itself
// let person = {
//   name: "Hitesh",
//   age: 19.5,
//   introduce: function () {
//     console.log(this); // Logs the `person` object
//     console.log(this.name); // Logs the `name` property of `person`
//   },
// };
