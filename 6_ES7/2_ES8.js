// ES8
// OBJECT.VALUES OBJECT.ENTRIES

// const obj = { name: 'Michael', age: 28, male: true }

// Object.values(obj).forEach((value) => {
//   console.log(value);
// })

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key, value);
// })

// console.log('abc'.padStart(10));         // "       abc"
// console.log('abc'.padStart(10, "foo"));  // "foofoofabc"
// console.log('abc'.padStart(6,"123465")); // "123abc"
// console.log('abc'.padStart(8, "0"));     // "00000abc"
// console.log('abc'.padStart(1));          // "abc"



// DESCRIPTORS Object.getOwnPropertyDescriptors
// const person = {
//   age: 42,
//   name: 'John',
//   female: false
// };

// const personDescriptors = Object.getOwnPropertyDescriptors(person);
// console.log(personDescriptors);


// // Whereas the Object.assign() method will only copy enumerable and own properties 
// // create shallow copy
// const personCopy = Object.create(
//   Object.getPrototypeOf(person), 
//   Object.getOwnPropertyDescriptors(person) 
// );

// const personCopyDescriptors = Object.getOwnPropertyDescriptors(personCopy);
// console.log(personCopyDescriptors);



// TRAILING COMMAS
// in arrays
// var arr = [1, 2, 3, ];
// console.log(arr.length); // 3

// var arr = [1, 2, 3,,,];
// console.log(arr.length); // 5


// es5
// var object = { 
//   foo: "bar", 
//   baz: "qwerty",
//   age: 42,
// };

// console.log(object);

// es8 (ECMAScript 2017) Trailing function commas
// Parameter Definitions equivalent
// function f1(p) { console.log(p) }
// function f2(p,) { console.log(p) }

// const f3 = (p) => { console.log(p) };
// const f4 = (p,) => { console.log(p) };
// f1('f1');
// f2('f2');
// f3('f3');
// f4('f4');

// Funciton calls
// f1('f1');
// f1('f1',);

// Illegal
// f1(,);
// function f(,) {}
