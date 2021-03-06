'use strict' 
// handling results and errors of asynchronous computations via await 
const setTimeoutP = require('./exportSetTimeoutP.js');
async function foo() {
  const res = await setTimeoutP(() => 'trololo2', 1000);
  console.log(res);
  return res;
}
foo()


// Multiple sequentially
const setTimeoutP = require('./exportSetTimeoutP.js');
async function foo() {
  const res1 = await setTimeoutP(() => 'trololo1', 1000);
  console.log(res1);
  const res2 = await setTimeoutP(() => 'trololo2', 1000);
  console.log(res2);
  return res1 + res2;
}
foo()

// Handling multiple asynchronous results in parallel
const setTimeoutP = require('./exportSetTimeoutP.js');
async function foo() {
  const [res1, res2] = await Promise.all([
    setTimeoutP(() => 'trololo1', 1000),
    setTimeoutP(() => 'trololo2', 1000)
  ]);
  console.log(res1);
  console.log(res2);
  return res1 + res2;
}
foo()

// Handling errors
const setTimeoutP = require('./exportSetTimeoutP.js');
async function foo() {
  try {
    const res1 = await setTimeoutP(() => 'trololo1', 1000);
    console.log(res1);
    const res2 = await setTimeoutP(() => 'trololo2', 1000);
    console.log(res2);
    throw new Error('some error happened');
    return res1 + res2;
  }
  catch(err) {
    throw new Error('we have error');
  }
}

foo().
catch((err) => { console.log(err)})
