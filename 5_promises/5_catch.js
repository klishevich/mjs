// WHAT IS CATCH
// promise.catch(
//     error => { /* rejection */ });

// promise.then(
//     null,
//     error => { /* rejection */ });

function asyncFunc() {
  return new Promise((resolve, reject) => { // (A)
    setTimeout(() => reject('DONE'), 100); // (B)
  });
}

asyncFunc()
.then(x => console.log('Then Result: '+x))
.catch(x => console.log('Catch Result: '+x));

// new Error('request Error: ' + error);

// # The states of Promises
// PENDING -> (SETTLED)
//            FULLFILLED
//            REJECTED
// settled once