// OOPs is a style of writing a code in different languages

// class --> blueprint it contains properties(datamembers) and memember function of an object
// object --> which actually allocate the memory

// Data Hiding --> changes in the properties of an object is done only and only by its memember function

// In JavaScript, classes are essentially syntactic sugar over prototypes.

// Revise

// Constructor Function
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.sound = function () {
//   return `${this.name} makes sound`;
// };
// let dog = new Animal("Tomy");
// console.log(dog.sound());

// // Any function after going inside the constructor becomes method
// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     return `${this.make} hello`;
//   }
// }

// let toyota = new Vehicle(1934, "safari");
// console.log(toyota.make);
// console.log(toyota.start());

// Inheritance

// car is called as derive call and if we want to have a construct of it own then we should also have a super constructor

// class Car extends Vehicle {
//   constructor(type, name, make, mode) {
//     super(make, mode);
//     this.type = type;
//     this.name = name;
//   }
//   drive() {
//     return `${this.make} ${this.mode} ${this.type} ${this.name} hello`;
//   }
// }

// let F1 = new Car("2934", "soham", "anil", "ghag");
// console.log(F1.drive());

// Encapsulation
// encapsulate data member and memeber function inside the class
// is a simple concept of restricting direct access to data object
// to make data member private we use "#"

// class BankAccount {
//   #balance = 0;
//   bal = 83;

//   deposit(amount) {
//     return (this.#balance += amount);
//   }

//   getBalance() {
// if (this.#balance > 0) {
//   return this.#balance;
// }
//   }
// }

// let soham = new BankAccount();
// console.log(soham.#balance);--> error
// console.log(soham.bal);
// console.log(soham.getBalance());
// console.log(soham.deposit(39448));
// console.log(soham.getBalance());

// Abstraction
//Abstraction in programming is about hiding the complexity of the backend or implementation details and only exposing the essential functionalities or interface to the user.

class Furance {
  Pbutton = 1;
  Abutton = 2;

  heat() {
    return `${this.Pbutton}`;
  }

  cool() {
    return `${this.Abutton}`;
  }

  heatcool() {
    let one = this.heat();
    let two = this.cool();

    return `${one} ${two}`;
  }
}

let iron = new Furance();
// console.log(iron.heatcool());

// Polymorphism --> ability of something to have or to be displayed in more than one form

// class Bird {
//   fly() {
//     return `Bird can fly`;
//   }
// }
// class Penguin extends Bird {
//   fly() {
//     return `Penguin cannot fly`;
//   }
// }

// let Sparrow = new Bird();
// let penguin = new Penguin();

// console.log(Sparrow.fly());
// console.log(penguin.fly());

// static method

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
// }
// let cal = new Calculator();
// console.log(cal.add(4, 5));

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }
// // let cal = new Calculator();
// // console.log(cal.add(4, 5)); //--> it will give the error
// // no need the object to call static function we can call it with the help of class name as well

// class Person {
//   #name;

//   constructor(name) {
//     if (name > 0) {
//       this.#name = name;
//     } //--> this variable is private and same as that above
//     // this._name = name; --> ._ is a convention nothing else ._name is obviously a new variable
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(value) {
//     if (value < 0) {
//       console.log("Invalid thing");
//     } else {
//       this.#name = value;
//     }
//   }
// }

// let Name = new Person(5);

// console.log(Name.name);

// // Name.name = -34;
// console.log(Name.name);

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getDetails() {
//     return `Make:[${this.make}],Model:[${this.model}]`;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, type) {
//     super(make, model);
//     this.type = type;
//   }
//   startEngine() {
//     console.log(super.getDetails());
//     return `Engine Started`;
//   }
// }

// //output

// let car = new Car("soham", "safari", 3857);
// let toyota = new Vehicle();

// console.log(car.startEngine());
// console.log(car.getDetails());

/* Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving". */

// class Vehicle {
//   move() {
//     return `Vehicle is moving`;
//   }
// }

// class Car extends Vehicle {
//   move() {
//     return "Car is Driving ";
//   }
// }

// let car = new Car();
// let vec = new Vehicle();
// console.log(car.move());
// console.log(vec.move());

// Task 3: Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

// class Vehicle {
//   static isvehicle(obj) {
//     return obj instanceof Vehicle;
//   }
// }

// let vec = new Vehicle();
// console.log(Vehicle.isvehicle(vec));
// let obj = {};
// console.log(Vehicle.isvehicle(obj));

/*Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative. */

// class BankAccount {
//   #balance;

//   get deposit() {
//     return this.#balance;
//   }
//   set deposit(obj) {
//     if (obj > 0) {
//       this.#balance = obj;
//     } else {
//       console.log("invalid amount");
//       return false;
//     }
//   }
// }

// let balance = new BankAccount();
// balance.deposit = 947;
// console.log(balance.deposit);

// Remember

/* calling the super() constructor in the child class is mandatory when the child class is inheriting from a parent class and the parent class has a constructor. This is required in ES6+ JavaScript classes. */

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

// class Square {
//   constructor(length) {
//     this.l = length;
//   }
//   area() {
//     return this.l * this.l;
//   }
// }
// class Rectangle extends Square {
//   constructor(length, breadth) {
//     super(length);
//     this.b = breadth;
//   }
//   area() {
//     return this.l * this.b;
//   }
// }

// let s1 = new Square(3);
// console.log(s1.area());
// let s2 = new Rectangle(3, 5);
// console.log(s2.area());

class Square {
  constructor(lenght) {
    this.length = lenght;
  }

  area() {
    return this.length * this.length;
  }
}

class Rectangle extends Square {
  constructor(length, breadth) {
    super(length);
    this.breadth = breadth;
  }

  area() {
    console.log(super.area());

    return this.breadth * this.length;
  }
}

const shape = new Square(4);
console.log(shape.area());
const rectangle = new Rectangle(5, 4);
console.log(rectangle.area());
