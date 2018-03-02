// # CHAINING PROMISES
// // common values
// Promise.resolve(10)
// .then(res => {
//   console.log(res);
//   return 2 * res;
// })
// .then(res => {
//   console.log(res);
//   return 2 * res;
// })
// .then(res => {
//   console.log(res);
//   return 2 * res;
// })


// const { readFile } = require('fs');
// function loadFileAsync(fileName) {
//   return new Promise(
//     (resolve, reject) => {
//       readFile(fileName, { encoding: 'utf8' },
//         (error, data) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(data);
//           }
//         });
//     });
// }

// loadFileAsync('test1.json')
// .then(result1 => {
//   console.log(1, result1);
//   return loadFileAsync('test2.json');
// })
// .then(result2 => {
//   console.log(2, result2);
// })
// .catch(error => {
//     console.log(error);
// })


// loadFileAsync('test1.json')
// .then(result1 => {
//   console.log(1, result1);
//   return loadFileAsync('test_no.json');
// })
// .then(result2 => {
//   console.log(2, result2);
//   return loadFileAsync('test2.json');
// })
// .then(result3 => {
//   console.log(3, result3);
// })
// .catch(error => {
//   console.log(4, error);
//   return loadFileAsync('test2.json');
// })
// .then(res => {
//   console.log(5, res);
// })


// // Promise or Thenable
// const fulfilledThenable = {
//   then(reaction) {
//     reaction('hello');
//   }
// };
// const promise = Promise.resolve(fulfilledThenable);
// console.log(promise instanceof Promise); // true
// promise.then(x => console.log(x)); // hello