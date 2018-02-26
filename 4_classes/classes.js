// es5 class

// class
function ShapeConstructor(name) {
  this.name = name;
}

// class method
ShapeConstructor.prototype.printName = function () {
  console.log(this.name);
}

var shape1 = new ShapeConstructor('Shape1 Name');
var shape2 = new ShapeConstructor('Shape2 Name');

console.log(Object.getOwnPropertyNames(shape1));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(shape1)));

shape1.printName();
shape2.printName();


ShapeConstructor.prototype.printName = function () {
  console.log('My name is - ', this.name);
}

shape1.printName();
shape2.printName();


// es5 inheritance

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

// ES6 classes


// Difference between Class and Functions
// 1. functions are hoisted, classes are not
const foo = new Foo(); // ReferenceError
class Foo {}


// 2. understanding

// a. class and object methods
class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'classy';
    }
    prototypeMethod() {
        return 'prototypical';
    }
}
let foo = new Foo(123);
console.log(typeof foo);
console.log(Object.getOwnPropertyNames(foo));
console.log(typeof Object.getPrototypeOf(foo));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(foo)));
console.log(typeof Object.getPrototypeOf(foo).constructor);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(foo).constructor));

console.log(Foo === Foo.prototype.constructor);
console.log(typeof Foo);
console.log(Foo.staticMethod());
console.log(foo.prototypeMethod());


// b. getters and setters
class MyClass {
    get prop() {
        console.log('getter');
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}

let inst = new MyClass();
inst.prop = 123;
inst.prop;


// c. computed method names

const m = 'myMethod';
class Foo2 {
  static [m]() {
    console.log('Hurray!');
  }
}

Foo2.myMethod();

// d. Rewrite Shape and Circle to classes

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


