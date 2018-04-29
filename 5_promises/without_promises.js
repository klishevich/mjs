const EventEmitter = require('events');
class MyPromise extends EventEmitter {
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

function myAsyncFunc() {
    return new MyPromise((resolve) => {
        setTimeout(() => resolve('DONE2'), 100);
    });
}

myAsyncFunc()
.then(x => console.log('Then Result: '+x));
