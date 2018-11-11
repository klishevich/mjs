function Foo() {
  this.prototypeMethod = () => { return 'prototypical'; }
}

Foo.staticMethod = () => {};
Foo.newStatic = () => {};
Foo.prototype.newMethod = () => {};

console.log(Object.getOwnPropertyNames(Foo));

const foo = new Foo()

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(foo)));
