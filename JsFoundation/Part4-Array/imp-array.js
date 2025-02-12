// 1.Dynamic size
// 2.Zero base indexing
// 3.Heterogenous Element

// `/* All the prototype method mutates orginal array */` // slice-- > it creates hard copy of an array // 4.Prototype methods-- > pop push shift unshift splice
// `// sorting mutates the orginal array`;
// num1.sort();
// console.log(num1);

// `reverse also mutates the original array`;
// console.log(num1.reverse);

// splice-- > mutates the orginal array
// it creates the new array if any Element is remove

// splice(startingpos, how many Elements have to delete,if any Element wants to be added or replace)

let num1 = [1, 2, 4, 3];

// let newArray = num1.splice(1, 2);
// console.log(num1);
// console.log(newArray);

// Adding element in an array
let newArray = num1.splice(1, 0, 3);
console.log(num1);
console.log(newArray);

// Remove all the Element from a certain index
// let newArray = num1.splice(1);
// console.log(num1);
// console.log(newArray);

// Replacing Element in an array

// let newArray = num1.splice(1, 1, 4);
// console.log(num1);
// console.log(newArray);

// `All Built-In Higher-Order Functions not mutates orginal array`;
// 5. Built-In Higher-Order Functions
// Arrays support powerful methods for functional programming:
// these methods do not mutates original array
// map(): Transform each element.
// filter(): Select elements based on a condition.

// let num = num1.map((x) => x * 2);
// console.log(num);

// let num = num1.filter((x) => x > 2);
// console.log(num);
