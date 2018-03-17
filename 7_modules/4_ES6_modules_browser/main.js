import sum from './sum.js';
function calcSum() {
  const res = sum(1,2);
  console.log(res);
}
window.calcSum = calcSum;


import myOtherModule from './my-class-module.js'
const myOtherModuleInstance = new myOtherModule();
window.myOtherModuleInstance = myOtherModuleInstance;


import _ from '../node_modules/lodash/index.js';
function join() {
  const res = _.join(['Lodash', 'Join'], ' ');
  return res;
}
window.join = join;
