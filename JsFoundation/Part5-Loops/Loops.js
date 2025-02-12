// Question No 1
// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);

// Question No 2

// let i = 5;
// let countdown = [];
// while (i > 0) {
//   countdown.push(i);
//   i--;
// }

// console.log(countdown);

// Question 3

// let teacollection = [];
// let teaName;

// do {
//   teaName = prompt(`Enter the name of the tea (type stop to end the code)`);

//   if (teaName != "stop") {
//     teacollection.push(teaName);
//   }
// } while (teaName != "stop");

// Question 4

// let i = 1;
// let sum = 0;
// do {
//   sum += i;
//   i++;
// } while (i <= 3);

// console.log(sum);

// Question 5

// let multipliedNumbers = [];
// let arr = [2, 4, 6];

// for (let i = 0; i < arr.length; i++) {
//   multipliedNumbers.push(arr[i] * 2);
// }

// console.log(multipliedNumbers);

// Question 6

// let i = 0;
// let k = 0;
// k = prompt("Enter a number");

// for (i = 2; i < k; i++) {
//   if (k % i == 0) {
//     break;
//   }
// }
// console.log(i);

// if (k == i) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Question 7

// let prod = 1;
// let a = prompt(`Enter value`);
// let b = prompt(`Enter value power`);

// for (i = 1; i <= b; i++) {
//   prod = prod * a;
// }
// console.log(prod);

// Question 8
// Range

// let arr = [];
// let a = prompt(`Enter value`);
// let b = prompt(`Enter value`);
// let i = 0;
// for (let j = a; j <= b; j++) {
//   for (i = 2; i < j; i++) {
//     if (j % i == 0) {
//       break;
//     }
//   }
//   if (j == i) {
//     arr.push(j);
//   }
// }
// console.log(arr);

// Question 9
// let arr = ["soham", "anil", "ghag"];
// let name = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "anil") {
//     break;
//   } else {
//     name.push(arr[i]);
//   }
// }
// console.log(name);

// Quesiton 10

// let arr = ["soham", "anil", "ghag"];
// let name = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "anil") {
//     continue;
//   } else {
//     name.push(arr[i]);
//   }
// }
// console.log(name);

// Question 11 --> for-of loop iterate through array

// let arr = [1, 2, 3, 4];
// let small = [];

// for (const num of arr) {
//   if (num == 4) {
//     break;
//   } else {
//     small.push(num);
//   }
// }
// console.log(small);

// Question 12

// let arr = ["soham", "anil", "ghag"];
// let arr1 = [];

// for (const num of arr) {
//   arr1.push(num);
// }
// console.log(arr1);

// Question 13 --> for-in iterate through object

// let city = {
//   Mumbai: 30304909,
//   London: 383478,
// };
// let Newcity = {};

// for (const key in city) {
//   console.log(Object.keys(city));
//   console.log(Object.values(city));

//   // key==value
//   Newcity[key] = city[key];
// }

// console.log(Newcity);

// Question 14 --> for each

// let arr = ["soham", "anil", "ghag"];
// let arr1 = [];

// arr.forEach(function (name) {
//   if (name == "anil") {
//     return;
//   } else {
//     arr1.push(name);
//   }
// });

// console.log(arr1);

// Remember
// function () {

// }
// same as

// () => {

// }

// Question 15
// let arr = [1, 2, 3, 5, 6];

// let arr1 = [];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] == 5) {
//     continue;
//   } else {
//     arr1.push(arr[index] * 2);
//   }
// }
// console.log(arr1);

// Question 16

// let arr = ["soham", "anil5", "ghag"];
// let arr1 = [];

// for (const name of arr) {
//   if (name.length <= 4) {
//     continue;
//   } else {
//     arr1.push(name);
//   }
// }

// console.log(arr1);

// Question 17

// let i;
// function greet(tea) {
//   for (i = 0; i < tea.length; i++) {
//     if (tea[i] == "0" || tea[i] == "1" || tea[i] == "3") {
//     } else {
//       break;
//     }
//   }
//   if (i == tea.length) {
//     console.log(`Conversion is possible`);

//     return Number(tea);
//   } else {
//     console.log(`Conversion is not possible`);
//   }
// }

// let input = greet(prompt("Enter string"));

// console.log(input);

// Question 18

// let arr = [1, 2, 4, 4, 5, 6, 7];

// let arr1 = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });

// console.log(arr);
// console.log(arr1);

// item is giving Element and index is giving index
// indexOf-- > giving first occurence of an element index

// like 1 is first occured at index 0

// let arr = [1, 2, 4, 4, 5, 6, 7];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

let arr = [1, 2, [3, [4, [5, 4, [4, 6]]]]];

let arr1 = arr.flat(4); //flat(depth)where depth is no of array inside the main array
console.log(arr);
console.log(arr1);
