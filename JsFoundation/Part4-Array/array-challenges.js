let teaFlavors = ["greentea", "blacktea", "oolongtea"];

let firstName = teaFlavors[0];
console.log(firstName);

teaFlavors[2] = "jasminetea";
console.log(teaFlavors);

// add element in the array using push operation
/* let citiesvisted = ["mumbai", "berlin"];
let length = citiesvisted.length;
citiesvisted[length] = "syndey";
console.log(citiesvisted);

citiesvisted.push("banglore");
console.log(citiesvisted); */

// remove element in the array using pop operation
/* let citiesvisted = ["mumbai", "berlin"];
let lastover = citiesvisted.pop();
console.log(lastover);
console.log(citiesvisted);
*/

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

// let popularTeas = ["greentea", "oolongtea", "chai"];
// let softCopyTeas =popularTeas-- > //it will copy the address of the popularTeas
//   popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

// use of spread operators

// let topCities = ["berlin", "singapore", "New York"];
// // let hardCopyCities = [...topCities];
// // let hardCopyCities = topCities.slice();
// console.log(topCities);
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "Bangkok"];
/* 
let worldCities = europeanCities + asianCities; --> this give us a String
console.log(worldCities);
 */

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolongtea", "greentea", "earlgrey"];
console.log(teaMenu.length);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];

let isLondonInList = cityBucketList.includes("london");
console.log(isLondonInList);

/* 11 Add element in the front of the array */

let num = [1, 2, 3];
num.unshift(3);
console.log(num);

/* 12 Remove element from the front of the array */

let num1 = [1, 2, 3];
num1.shift();
console.log(num1);
