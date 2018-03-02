// Why classes are bad
// No real Classes
// Hard Refactoring
// JS is functional language so better use functions. Functions are first-class citizens

// Do not Classes use Factory functions
class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}
let shape = new Shape('my shape');
shape.printName();

const createShape = (name) => ({
  name,
  printName: function () { console.log(this.name); }
})
let shape2 = createShape('other shape');
shape2.printName();


// If you use Classes
// Dan Abramov advices

// 1. Resist making classes your public API.
// Just use them internaly and export factory functions

// // createShapeExport.js
// module.exports = (name) => ({
//   name,
//   printName: function () { console.log(this.name); }
// });

// // createShapeImport.js
// const createShape = require('./createShapeExport.js');
// let shape2 = createShape('other shape');
// shape2.printName();


// 2. Do not inherit more than once
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log(this.name);
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);
//     this.radius = radius;
//   }

//   printRadius() {
//     console.log('My radius ' + this.radius);
//   }  
// }

// class BigCircle extends Circle {
//   constructor(color) {
//     super('Big Circle',100);
//     this.color = color;
//   }

//   printName() {
//     // Do not do this
//     // super.printRadius();
//     console.log(this.name + ' ' + this.name);
//   }

//   printColor() {
//     console.log(this.color);
//   }
// }

// let bigCircle = new BigCircle('deep blue');
// bigCircle.printName();
// bigCircle.printRadius();
// bigCircle.printColor();


// проблемы:
// при создании нового метода, могут быть совпадения имен в дочерних класса
// при удалении метода поиск где используются методы
// переименование переменной в родительском классе


// 3. Don’t make super calls from methods. 



// 4. Don’t expect people to use your classes.
// Do not do instanceof checks

class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

let shape1 = new Shape('My name is, My name is, My name is slim shady');

// Duck Typing
let shape2 = { name: 'Good Name', printName: function() { console.log(this.name); } };

// if (shape1 instanceof Shape) {
//   shape1.printName();
// }

// if (shape2 instanceof Shape) {
//   shape2.printName();
// }


shape1.printName();
shape2.printName();

// shape2.printName();


// 5. Learn functional programming!



