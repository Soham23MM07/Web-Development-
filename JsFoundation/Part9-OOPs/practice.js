// / Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `${this.make} and ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, age) {
    super(make, model);
    this.age = age;
  }

  startEngine() {
    return `Start Engine`;
  }
}

let soham = new Vehicle("safari", "pink");

console.log(soham.getDetails());

let anil = new Car("toyota", "pink", 3048);

console.log(anil.getDetails());
