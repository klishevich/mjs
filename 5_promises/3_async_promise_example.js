// # ASYNCRONITY
// что такое асинхронность
setTimeout(function () { // (A)
  console.log('Second');
}, 0);
console.log('First'); // (B)


// # PROMISES EXAMPLE / CREATE PROMISE
// О том где они обычно встречаются в асинхронных функциях: httpGet, fileRead
function asyncFunc() {
  return new Promise((resolve, reject) => { // (A)
    setTimeout(() => resolve('DONE'), 100); // (B)
  });
}

asyncFunc()
.then(x => console.log('Then Result: '+x))
// .catch(x => console.log('Catch Result: '+x));