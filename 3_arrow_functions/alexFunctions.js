const someObject = {
  name: 'someObject',
  printName() {
    return this.name;
  }
}

console.log(someObject.printName())