import { sum } from './sum.js';
function calcSum() {
  const res = sum(1,2);
  console.log(res);
}
window.calcSum = calcSum;


import myOtherModule from './myClassModule.js'
myOtherModuleInstance = new myOtherModule();
window.myOtherModuleInstance = myOtherModuleInstance;


import _ from 'lodash';
function join() {
  const res = _.join(['Lodash', 'Join'], ' ');
  return res;
}
window.join = join;
