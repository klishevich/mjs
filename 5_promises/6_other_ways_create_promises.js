// // Other ways of creating Promises
// Promise.resolve('abc')
//   .then(x => console.log(x)); // abc


// const p = new Promise(() => null);
// console.log(Promise.resolve(p) === p); // true


// // Promise.reject(err) returns a Promise that is rejected with err:
// const myError = new Error('Problem!');
// Promise.reject(myError)
// .catch(err => console.log(err === myError)); // true


// // Promise.all Example
// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve('foo'), 100);
// });

// Promise.all([promise1, promise2, promise3])
// .then((values) => console.log(values))
// .catch(err => {
//   // Receives first rejection among the Promises
//   console.log('Ups', err);
// })

// // finally not supported node.js
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('DONE'), 100);
//   });
// }
// asyncFunc()
// .then((x) => {
//   console.log('Then Result: '+x);
//   return x;
// })
// .catch((x) => {
//   console.log('Catch Result: '+x);
//   return x;
// })
// .finally((x) => {
//   console.log('Then END');
//   return x;
// })

