// # My Own Promise Realization
class MyPromise {
  constructor(func) {
    const resolve = (res) => {
      this.funcResult = res;
    };
    func(resolve);
  }

  then(func) {
    setTimeout(() => func(this.funcResult), 1000);
  }
}

function myAsyncFunc() {
  return new MyPromise((resolve) => {
    setTimeout(() => resolve('DONE2'), 100);
  });
}

myAsyncFunc().then(x => console.log('Result: '+x));


// # My Own Promise Realization 2
const EventEmitter = require('events');
class MyPromise2 extends EventEmitter {
  constructor(func) {
    super();
    const resolve = (res) => {
      this.funcResult = res;
      this.emit('okey');
    };
    func(resolve);
  }

  then(func) {
    this.on('okey', () => func(this.funcResult));
  }
}

function myAsyncFunc2() {
  return new MyPromise2((resolve) => {
    setTimeout(() => resolve('DONE2'), 2000);
  });
}

myAsyncFunc2().then(x => console.log('Result: '+x));
