// js is prototype based language
// prototype means any datatype created has some extra properties and  extra functionalities
// Everything in js world is object

// Old Method

let car = {
  model: 1834,
};
let Newcar = {
  color: "pink",
  __proto__: car,
};

// console.log(car);
// console.log(Newcar);
// console.log(car.__proto__); ---> it will give on browser

// console.log(Newcar.__proto__); --> it will print the property of car

let computer = {
  cpu: 15,
};
let lenovo = {
  screen: "Hd",
};

lenovo["name"] = "soham";
// console.log(lenovo);

// console.log(lenovo.hasOwnProperty("name"));
// console.log(lenovo.hasOwnProperty("cpu"));

// console.log(computer); --> prints its all properties
// console.log(lenovo);
// console.log(`computer`, computer.__proto__); // ---> it will give null proto
// it will give property on windows

// Object.setPrototypeOf(lenovo, computer); --> lenovo inheriting property of computer
// console.log(lenovo);--> give screen only
// console.log(lenovo.cpu); --> //explicitly mentioned
console.log(Object.getPrototypeOf(lenovo));

// console.log(lenovo.__proto__); --> null
