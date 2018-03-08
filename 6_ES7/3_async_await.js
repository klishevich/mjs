'use strict' 
// DEFINITION
// Async functions based on promises !!!

// 1 Promisify setTimeout

// setTimeout(() => { console.log('trololo') }, 1000);

// function setTimeoutP(func, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         const res = func();
//         resolve(res);
//       }
//       catch(error) {
//         reject(error);
//       }
//     }, time);
//   });
// }

// setTimeoutP(() => { console.log('trololo') }, 1000);

// setTimeoutP(() => 'trololo', 1000)
// .then(res => console.log(res))

// EXAMPLES

// const setTimeoutP = require('./exportSetTimeoutP.js');

// // Async function declarations

// async function foo() {
//   const res = await setTimeoutP(() => 'trololo2', 1000);
//   console.log(res);
//   return res;
// }
// foo()

// // Async function expressions
// const foo = async function () {
//   const res = await setTimeoutP(() => 'trololo3', 1000);
//   console.log(res);
//   return res;
// }
// foo()

// // Async method definitions
// let obj = {
//   async foo() {
//     const res = await setTimeoutP(() => 'trololo4', 1000);
//     console.log(res);
//     return res;
//   }
// }
// obj.foo()

// // Async arrow function
// const foo = async () => {
//   const res = await setTimeoutP(() => 'trololo3', 1000);
//   console.log(res);
//   return res;
// }
// foo()


// ASYNC FUNCTIONS ALWAYS RETURN PROMISES

// const setTimeoutP = require('./exportSetTimeoutP.js');
// async function foo() {
//   const res = await setTimeoutP(() => 'trololo2', 1000);
//   console.log(res);
//   return res;
// }
// foo()
// .then(res => console.log(`Res Again: ${res}`));


// async function asyncFunc() {
//     return 123;
// }
// asyncFunc()
// .then(x => console.log(x));


// // Reject promise
// async function asyncFunc() {
//     throw new Error('Problem!');
// }

// asyncFunc()
// .catch(err => console.log(err));
//     // Error: Problem!

