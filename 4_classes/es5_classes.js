// Superclass
function ShapeConstructor(name) {
  this.name = name;
}

// Superclass Method
ShapeConstructor.prototype.printName = function () {
  console.log(this.name);
}

// Subclass
function CircleConstructor(name, radius) {
  ShapeConstructor.call(this, name);
  this.radius = radius;
}

// CircleConstructor derives from ShapeConstructor
CircleConstructor.prototype = Object.create(ShapeConstructor.prototype);
// Set Constructor back
CircleConstructor.prototype.constructor = CircleConstructor;

// Subclass Method
CircleConstructor.prototype.printRadius = function () {
  console.log('My radius ' + this.radius);
}

var circle = new CircleConstructor('My Circle', 10);
circle.printName();
circle.printRadius();
