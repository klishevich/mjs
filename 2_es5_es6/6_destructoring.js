// unpacking values from arrays, or properties from objects, into distinct variables
// Array destructuring

const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"


// default values
let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


// Parsing an array returned from a function
function f() {
  return [1, 2];
} 
const [a, b] = f(); 
console.log(a); // 1
console.log(b); // 2


// Ignoring some returned values
function f() {
  return [1, 2, 3];
}
const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3


// Assigning the rest of an array to a variable
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]




// Object Destructoring
const o = {p: 42, q: true, m: 'blabla'};
const {p, q} = o;
console.log(p); // 42
console.log(q); // true


// Assigning to new variable names
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
console.log(foo); // 42 
console.log(bar); // true


// Default values
var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b); // 5


// Assigning to new variables names and providing default values
var {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5


// Nested object and array destructuring
const metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
const {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"


// For of iteration and destructuring
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];
for (let {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}


// Unpacking fields from objects passed as function parameter
const user = { 
  id: 42, 
  displayName: 'jdoe',
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  }
};
function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}
whois(user); // "jdoe is John"


// Rest in Object Destructuring
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
console.log(a);
console.log(b);
console.log(rest);

