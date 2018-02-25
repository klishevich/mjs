// # ASYNCRONITY
// что такое асинхронность
setTimeout(function () { // (A)
  console.log('Second');
}, 0);
console.log('First'); // (B)



// # PROMISES EXAMPLE
// О том где они обычно встречаются в асинхронных функциях: httpGet, fileRead
function asyncFunc() {
  return new Promise((resolve, reject) => { // (A)
    setTimeout(() => resolve('DONE'), 100); // (B)
  });
}

asyncFunc()
.then(x => console.log('Result: '+x));



// # PROMISIFYING
// Для чего они нужны. Чтобы упрощать работу с callback-ами и callback hell-ом
// ## httpGet
const request = require("request");
function httpGet(url) {
  return new Promise(
    (resolve, reject) => {
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



// # CREATE PROMISE
const { readFile } = require('fs');
const p = new Promise(
(resolve, reject) => {
  readFile('test.json', { encoding: 'utf8' },
    (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
});

p.then(text => {
    console.log(text);
})
.catch(error => {
    console.log(error);
});

// WHAT IS CATCH
promise.then(
    null,
    error => { /* rejection */ });

promise.catch(
    error => { /* rejection */ });


// # The states of Promises
PENDING -> (SETTLED)
           FULLFILLED
           REJECTED
settled once


// # CHAINING PROMISES
// common values
Promise.resolve(10)
.then(res => {
  console.log(res);
  return 2 * res;
})
.then(res => {
  console.log(res);
  return 2 * res;
})
.then(res => {
  console.log(res);
  return 2 * res;
})


// Promise or Thenable
const { readFile } = require('fs');
function loadFileAsync(fileName) {
  return new Promise(
    (resolve, reject) => {
      readFile(fileName, { encoding: 'utf8' },
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
    });
}


loadFileAsync('test1.json')
.then(result1 => {
  console.log(1, result1);
  return loadFileAsync('test2.json');
})
.then(result2 => {
  console.log(2, result2);
})
.catch(error => {
    console.log(error);
})


loadFileAsync('test1.json')
.then(result1 => {
  console.log(1, result1);
  return loadFileAsync('test_no.json');
  // throw new Error();
})
.then(result2 => {
  console.log(2, result2);
  return loadFileAsync('test2.json');
})
.then(result3 => {
  console.log(3, result3);
})
.catch(error => {
  console.log(4, error);
  return loadFileAsync('test2.json');
})
.then(res => {
  console.log(5, res);
})


const fulfilledThenable = {
  then(reaction) {
    reaction('hello');
  }
};
const promise = Promise.resolve(fulfilledThenable);
console.log(promise instanceof Promise); // true
promise.then(x => console.log(x)); // hello



// Other ways of creating Promises
Promise.resolve('abc')
  .then(x => console.log(x)); // abc


const p = new Promise(() => null);
console.log(Promise.resolve(p) === p); // true


// Promise.reject(err) returns a Promise that is rejected with err:
const myError = new Error('Problem!');
Promise.reject(myError)
.catch(err => console.log(err === myError)); // true


// Promise.all Example
Promise.all([
    asyncFunc1(),
    asyncFunc2(),
])
.then(([result1, result2]) => {
    ···
})
.catch(err => {
    // Receives first rejection among the Promises
    ···
});


// finally
createResource(···)
.then(function (value1) {
    // Use resource
})
.then(function (value2) {
    // Use resource
})
.finally(function () {
    // Clean up
});


// # My Own Promise Realization
class MyPromise {
  constructor(func) {
    this.func = func;
    const myResolve = (res) => {
      this.funcResult = res;
    };
    func(myResolve);
  }

  myThen(func) {
    setTimeout(() => func(this.funcResult), 1000);
  }
}

function myAsyncFunc() {
  return new MyPromise((resolve) => {
    setTimeout(() => resolve('DONE2'), 100);
  });
}

myAsyncFunc().myThen(x => console.log('Result: '+x));

// # My Own Promise Realization 2
const EventEmitter = require('events');
class MyPromise2 extends EventEmitter {
  constructor(func) {
    super();
    this.func = func;
    this.myResolve = (res) => {
      this.funcResult = res;
      this.emit('okey');
    };
    func(this.myResolve);
  }

  myThen(func) {
    this.on('okey', () => func(this.funcResult));
  }
}

function myAsyncFunc2() {
  return new MyPromise2((resolve) => {
    setTimeout(() => resolve('DONE2'), 2000);
  });
}

myAsyncFunc2().myThen(x => console.log('Result: '+x));





// function timeout(ms, promise) {
//   return new Promise(function (resolve, reject) {
//     // reject(new Error('Timeout after '+ms+' ms')); // (A)
//     promise.then(resolve);
//     setTimeout(function () {
//       reject(new Error('Timeout after '+ms+' ms')); // (A)
//       // promise.then(resolve);
//     }, ms);
//   });
// }

// timeout(5000, httpGet('http://example.com/file.txt'))
// .then(function (value) {
//     console.log('Contents: ' + value);
// })
// .catch(function (reason) {
//     console.error('Error or timeout', reason);
// });




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





// CHAINING PROMISES
// 25.8.1 Resolving Q with a normal value


// 25.8.2 Resolving Q with a thenable


// Promise.all Example


// done


// finally



