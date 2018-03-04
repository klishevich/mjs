function asyncFunc() {
  console.log('A');
  return Promise.resolve('aaa');
}

asyncFunc()
.then(res => {
  console.log('B: ' + res);
})

console.log('C');