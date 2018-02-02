// example 1
function easy_func_0(data) {
  return 'this is my data: ' + data;
}

var easy_func_1 = function(data) {
  return 'this is my data: ' + data;
}

const easy_func_2 = (data) => {
  return 'this is my data: ' + data;
}

const easy_func_3 = (data) => ('this is my data: ' + data);

// console.log('easy_func_0', easy_func_1('zero'));
// console.log('easy_func_1', easy_func_1('one'));
// console.log('easy_func_2', easy_func_2('two'));
// console.log('easy_func_3', easy_func_2('three'));

// example 2

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var length_func_0 = function (name) {
  return name.length;
}

const length_func_1 = (name) => {
  return name.length;
}

const length_func_2 = (name) => (name.length);

const length_func_3 = name => name.length;

// console.log('length_func_0', materials.map(length_func_0));
// console.log('length_func_1', materials.map(length_func_1));
// console.log('length_func_2', materials.map(length_func_2));
// console.log('length_func_3', materials.map(length_func_3));
// console.log('length_func inline', materials.map(material => material.length));

// "this" example

this.name = 'My Module'

const someObject = {
  name: 'someObject',
  printName: function() {
    return this.name;
  },
  printNameArrow: () => this.name,
  setTM: function() {
    setTimeout(function () {
      console.log('setTM', this.name);
    }, 1000);
  },
  setTM2: function() {
    var self = this;
    setTimeout(function () {
      console.log('setTM2', self.name);
    }, 1000);
  },
  setTM3: function() {
    setTimeout(function () {
      console.log('setTM3', this.name);
    }.bind(this), 1000);
  },
  setTMArrow: function() {
    setTimeout(() => {
      console.log('setTMArrow', this.name);
    }, 1000);
  }
}

// console.log('someObject.printName', someObject.printName());
// console.log('someObject.printNameArrow', someObject.printNameArrow());

// console.log('someObject.name', someObject.name);
// someObject.setTM();
// someObject.setTM2();
// someObject.setTM3();
// someObject.setTMArrow();

function OtherObjectConstructor() {
  this.name = 'OtherObject';
  this.printName = function () {
    console.log(this.name);
  }
  this.printNameArrow = () => {
    console.log(this.name);
  }
}

const otherObject = new OtherObjectConstructor();
// otherObject.printName();
// otherObject.printNameArrow();

