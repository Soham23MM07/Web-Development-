// Object --> is instance of a class creation of object is call instanciation
// Function --> method

// Every function in JavaScript automatically has a property called prototype, which is used to attach shared methods or properties.
//prototype is a property of a function which has some methods and properties

// By using the prototype, methods or properties are shared among all instances of a constructor function,

// Constructor is a special function that is use to initilaize object
// whenever object is created memory gets  invoked

// Constructor Function
// 1.When a constructor function is called with new, a new empty object is created.
// 2.The this keyword is automatically set to refer to that new object.
// 3.The function executes, and any properties or methods assigned to this become part of the new object.
// 4.The newly created object is returned by default (unless another object is explicitly returned).

/* A new empty object is created.
1.The this keyword inside the constructor is set to refer to this new object.
2.The new object gets linked to the prototype of the constructor function.
3.The constructor function runs, and properties or methods assigned to this become part of the new object.
4.By default, the new object is returned, unless the constructor explicitly returns another object. */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let soham = new Person("soham", "ghag");
// console.log(soham);

// so this.name has no relation with parameter name they both are utterly different entities
// this and new are responsilbe for uniquness of different object

// Remember
/*No, you cannot use an arrow function as a constructor in JavaScript. Arrow functions are not designed to work as constructors, and trying to use them with the new keyword will result in a TypeError. */
// as well as the prototype function should not be made of arrow function it will give undefined value of varaible
// let car = (type) => {
//   this.type = type;
//   this.describe = () => {
//     return `this is my ${this.type}`;
//   };
// };
// let anil = new car("toyota");
// console.log(anil);

// function car(type) {
//   this.type = type;
//   this.describe = () => {
//     return `this is my ${this.type}`;
//   };
// }
// let anil = new car("toyota");
// console.log(anil);
// console.log(anil.describe());

// function Animal(species) {
//   this.species = species;
// }

// this should also be made up of regular function
// i have added sound method in the prototype of animal function

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };

// let dog = new Animal("Dog");
// console.log(dog.sound());

// Why we are creating this prototype(method) outside the class only
// because every object would have some different property but not same property
// that's why who want this function they can access it accordinly without wasting memory

// function Game(game) {
//   this.game = game;
// }

// Game.prototype.rule = function () {
//   return `${this.game} has some rules`;
// };

// let cricket = new Game("cricket");
// console.log(cricket.game);
// console.log(cricket.rule());

/* 
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
 */

function Parent(name, age) {
  this.name = name;
  this.age = age;
  this.info = () => {
    return `Name: ${this.name} Age: ${this.age}`;
  };
}

Parent.prototype.work = function () {
  return `Work of ${this.name}`;
};

function Child(name, age, school) {
  this.school = school;
  Parent.call(this, name, age); // internal inherting
  this.scName = () => {
    return `Name of school ${this.school}`;
  };
}

// Prototype inheriting
// first to ensure all the properties to be inherited
Child.prototype = Object.create(Parent.prototype);

Child.prototype.job = function () {
  return ` Name:${this.name} Age:${this.age} School:${this.school}`;
};

let s1 = new Parent("soham", 19);
// console.log(s1.age);
// console.log(s1.info());
// console.log(s1.work());

let c1 = new Child("Adi", "22", "NIT");
// console.log(c1.name);
// console.log(c1.age);
// console.log(c1.school);
// console.log(c1.scName());
// console.log(c1.job());

// console.log(c1.work());
// console.log(c1.info());

/* 
Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.greet = () => {
//     return `Hello, my name is [${this.name}]`;
//   };
// }

// let per = new Person("soham", 19);
// console.log(per.greet());

/* 
Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number. */

function Person(name, age) {
  this.name = name;
  if (age < 0) {
    throw new Error("Invalid Age");
  } else {
    this.age = age;
  }

  this.greet = () => {
    return `Hello, my name is [${this.name}]`;
  };
}

let per = new Person("soham", -3);
console.log(per.greet());
