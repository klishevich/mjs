'use strict'
// async functions are started synchronously, settled asynchronously
async function asyncFunc() {
  console.log('asyncFunc()'); // (A)
  return 'abc';
}
asyncFunc().
then(x => console.log(`Resolved: ${x}`)); // (B)
console.log('main'); // (C)


// returned promises are not wrapped 

// Returning a non-Promise value fulfills p with that value.
async function asyncFunc() {
    return 123;
}
asyncFunc()
.then(x => console.log(x)) // 123

// Returning a Promise means that p now mirrors the state of that Promise.
async function asyncFunc() {
  return Promise.resolve(123);
}
asyncFunc()
.then(x => console.log(x)) // 123


// don’t forget await
const setTimeoutP = require('./exportSetTimeoutP.js');

async function foo() {
  const res = setTimeoutP(() => 'trololo2', 1000); // missing `await`
  console.log(res);
  return res;
}
foo()

// no await in callbacks
const setTimeoutP = require('./exportSetTimeoutP.js');
async function downloadContent(urls) {
  return urls.map(url => {
      // Wrong syntax!
      const content = await setTimeoutP(() => `Content: ${url}`, 1000);
      return content;
  });
}
downloadContent(['http://first.com', 'http://second.com'])
.then((res) => { console.log(res)});


const setTimeoutP = require('./exportSetTimeoutP.js');
async function downloadContent(urls) {
  const promiseArray = urls.map(url => setTimeoutP(() => `Content: ${url}`, 1000));
  return Promise.all(promiseArray);
}
downloadContent(['http://first.com', 'http://second.com'])
.then((res) => { console.log(res)});

// don’t worry about unhandled rejections
async function foo() {
  throw new Error('Problem!');
}
foo();
