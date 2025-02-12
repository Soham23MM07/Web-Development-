// Regular Function have its own this
// --> its value depends how the function is called (globally,object)
// arrow function dont have there own this inherit from parent
// -->it always go its parent

// console.log("soham");

// function name12() {
//   console.log(this); //---> window(global)
// }

// let arrow = () => {
//   console.log(this); //---> {}
// };

// name12();
// arrow();

// const obj1 = {
//   name: "soham",
//   greet: function () {
//     console.log(this); //-->obj1

//     console.log(this.name); //--> refers to object;
//   },
//   treat: () => {
//     console.log(this); //--->{}
//     console.log(this.name); //-->undefined
//   },
// };

// obj1.greet();
// obj1.treat();

// const obj = {
//   name: "Soham",
//   regularFunc: function () {
//     function innerFunc() {
//       console.log(this.name);
//     }
//     innerFunc(); // `this` refers to global object or undefined (in strict mode)
//   },
//   arrowFunc: function () {
//     const innerArrowFunc = () => {
//       console.log(this.name); // Inherits `this` from outer function
//     };
//     innerArrowFunc();
//   },
// };

// obj.regularFunc(); // undefined
// obj.arrowFunc(); // "Soham"

// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.

// let Person = {
//   name: "soham",
//   introduce: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.

function introduce(name, age) {
  console.log(`Hello my name is ${name} and ${age}`);
}

introduce("soham", 38);

// `Task 3: Using apply() to Pass Arguments with Context

// Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.`
