// // Whereas the Object.assign() method will only copy enumerable and own properties 
// // create shallow copy
// const personCopy = Object.create(
//   Object.getPrototypeOf(person), 
//   Object.getOwnPropertyDescriptors(person) 
// );

// const personCopyDescriptors = Object.getOwnPropertyDescriptors(personCopy);
// console.log(personCopyDescriptors);



// Trailing commas
// in arrays
// var arr = [1, 2, 3, ];
// console.log(arr.length); // 3

// var arr = [1, 2, 3,,,];
// console.log(arr.length); // 5


// ES5
// var object = { 
//   foo: "bar", 
//   baz: "qwerty",
//   age: 42,
// };

// console.log(object);

// // ECMAScript 2017 Trailing function commas
// function f1(p) {}
// function f2(p,) {} 

// const f3 = (p) => {};
// const f4 = (p,) => {};
// f1();
// f2();
// f3();
// f4();