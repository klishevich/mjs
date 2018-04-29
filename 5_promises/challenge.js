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

function asyncFunc() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => resolve('DONE'), 100);
    });
}
  
asyncFunc()
.then(x => console.log('Then Result: '+x));

// MAKE IT WORK for MyPromise like it works for Promise
function asyncFunc2() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => reject('Error Error...'), 100);
    });
}
  
asyncFunc2()
.catch(x => console.log('Then Result: '+x));

