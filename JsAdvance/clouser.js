// A closure in JavaScript is a function that "remembers" the variables and functions in its lexical scope, even when it is executed outside that scope. Closures are created whenever a function is defined inside another function and accesses variables of the outer function.

function outer() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

// let increment = outer();
// console.log(increment());--> 1
// console.log(increment());--> 2
// console.log(increment());--> 3

// This this create callback problem again and again
/* 
Task 1: Creating a Counter Using Closures
Create a function createCounter() that returns a function which increments and returns a counter value each time it is called. */

function createCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

let store = createCounter();
// console.log(store());

for (let i = 0; i < 5; i++) {
  // console.log(store());
}

/* Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
 */

function reateLimiter(fn, limit) {
  return function () {
    let t = limit;
    if (t < 1000) {
      fn();
    } else {
      console.log("Rate Limit Exceeded");
    }
  };
}

let sayhello = () => console.log("hello");
let store1 = reateLimiter(sayhello, 94);
store1();

/* 
Task 3: Memoization Function
Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again. */

function memorize(fn) {
  return;
}
