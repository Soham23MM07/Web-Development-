function fun(name) {
  this.name = name;
}

fun.prototype.sound = function () {
  return `this fun makes sound ${this.name}`;
};

let greet = new fun("soham");
console.log(greet.sound());
