// function h(z) {
//     // Print stack trace
//     console.log(new Error().stack); // (A)
// }
// function g(y) {
//     h(y + 1); // (B)
// }
// function f(x) {
//     g(x + 1); // (C)
// }
// f(3); // (D)
// return; // (E)



// # ASYNCRONITY
// setTimeout(function () { // (A)
//     console.log('Second');
// }, 0);
// console.log('First'); // (B)



// # PROMISES EXAMPLE
// function asyncFunc() {
//     return new Promise((resolve, reject) => { // (A)
//         setTimeout(() => resolve('DONE'), 100); // (B)
//     });
// }
// asyncFunc()
// .then(x => console.log('Result: '+x));



// # ASYNC AWAIT EXAMPLE
// async function main() {
//     const x = await asyncFunc(); // (A)
//     console.log('Result: '+x); // (B)

//     // Same as:
//     // asyncFunc()
//     // .then(x => console.log('Result: '+x));
// }
// main();



// function asyncFunc() {
//     const blank = [];
//     setTimeout(() => blank.push('DONE'), 100);
//     return blank;
// }
// const blank = asyncFunc();
// console.log(123, blank[0]);
// // Wait until the value has been filled in
// setTimeout(() => {
//     const x = blank[0]; // (A)
//     console.log('Result: '+x);
// }, 200);



// # My Own Promise Realization
// class MyPromise {
//   constructor(func) {
//     this.func = func;
//     const myResolve = (res) => {
//       this.funcResult = res;
//     };
//     func(myResolve);
//   }

//   myThen(func) {
//     setTimeout(() => func(this.funcResult), 1000);
//   }
// }

// function myAsyncFunc() {
//   return new MyPromise((resolve) => {
//     setTimeout(() => resolve('DONE2'), 100);
//   });
// }

// myAsyncFunc().myThen(x => console.log('Result: '+x));



// # My Own Promise Realization 2
// const EventEmitter = require('events');
// class MyPromise2 extends EventEmitter {
//   constructor(func) {
//     super();
//     this.func = func;
//     const myResolve = (res) => {
//       this.funcResult = res;
//       this.emit('okey');
//     };
//     func(myResolve);
//   }

//   myThen(func) {
//     this.on('okey', () => func(this.funcResult));
//   }
// }

// function myAsyncFunc2() {
//   return new MyPromise2((resolve) => {
//     setTimeout(() => resolve('DONE2'), 2000);
//   });
// }

// myAsyncFunc2().myThen(x => console.log('Result: '+x));



// function asyncFunc() {
//     const eventEmitter = { success: [] };
//     console.log(eventEmitter.success);
//     setTimeout(() => { // (A)
//       console.log(eventEmitter.success);
//         for (let handler of eventEmitter.success) {
//           console.log(Object.toString(handler));
//           handler('DONE');
//         }
//     }, 100);
//     return eventEmitter;
// }
// asyncFunc()
// .success.push(x => console.log('Result: '+x)); // (B)



// Note that catch() is simply a more convenient (and recommended) alternative to calling then(). That is, the following two invocations are equivalent:
// promise.then(
//     null,
//     error => { /* rejection */ });

// promise.catch(
//     error => { /* rejection */ });



// # FILE READ
// const {readFile} = require('fs');
// import {readFile} from 'fs';

// function readFilePromisified(filename) {
//   return new Promise(
//     function (resolve, reject) {
//       readFile(filename, { encoding: 'utf8' },
//         (error, data) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(data);
//           }
//         });
//     });
// }

// readFilePromisified('test1.json')
// .then(text => {
//     console.log(text);
// })
// .catch(error => {
//     console.log(error);
// });



// # httpGet
const request = require("request");

function httpGet(url) {
  return new Promise(
    function (resolve, reject) {
      request.get(url, (error, response, body) => {
        if (error) {
          reject(new Error('request Error: ' + error));
        } else {
          resolve(body);
        }
      });
    });
}

httpGet('http://example.com/file.txt')
.then((value) => {
  console.log('Contents: ' + value);
})
.catch((reason) => {
  console.error('Something went wrong', reason);
});

