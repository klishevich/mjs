// Superclass
class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

// Subclass
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  printRadius() {
    console.log('My radius ' + this.radius);
  }
  
}

const circle2 = new Circle('My Circle', 10);
circle2.printName();
circle2.printRadius();
