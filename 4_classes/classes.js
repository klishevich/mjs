// ES5 CLASSES

// superclass or Shape Class
function ShapeConstructor(name) {
  this.name = name;
}

// superclass method
ShapeConstructor.prototype.printName = function () {
  console.log(this.name);
}

console.log(Object.getOwnPropertyNames(ShapeConstructor.prototype));

// subclass or Circle Class
function CircleConstructor(name, radius) {
  // Call constructor of superclass to initialize superclass-derived members.
  ShapeConstructor.call(this, name);
  // Initialize subclass's own members
  this.radius = radius;
}

console.log(Object.getOwnPropertyNames(CircleConstructor.prototype));
console.log(CircleConstructor.prototype.constructor.toString());

// CircleConstructor derives from ShapeConstructor
// Set prototype for prototype, delegate methods from superclass
CircleConstructor.prototype = Object.create(ShapeConstructor.prototype);

console.log(Object.getOwnPropertyNames(CircleConstructor.prototype));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(CircleConstructor.prototype)));

// Set constructor back
CircleConstructor.prototype.constructor = CircleConstructor;
console.log(Object.getOwnPropertyNames(CircleConstructor.prototype));
console.log(CircleConstructor.prototype.constructor.toString());

// Subclass methods.
CircleConstructor.prototype.printRadius = function () {
  console.log('My radius ' + this.radius);
}

var circle = new CircleConstructor('My Circle', 10);
circle.printName();
circle.printRadius();

// ES6 CLASSES
// Shape Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    // obligatory super
    super(name);
    this.radius = radius;
  }

  printRadius() {
    console.log('My radius ' + this.radius);
  }
  
}

console.log(Object.getOwnPropertyNames(Circle.prototype));
console.log(Circle.prototype.constructor.name);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Circle.prototype)));
console.log(Object.getPrototypeOf(Circle.prototype).constructor.name);

const circle2 = new Circle('My Circle', 10);
circle2.printName();
circle2.printRadius();
