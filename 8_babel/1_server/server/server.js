// import babelPolyfill from 'babel-polyfill';
import { coreJsFinally } from 'core-js/fn/promise/finally';
import { coreJsObjectValues } from 'core-js/fn/object/values';

import _ from 'lodash';
import sum from '../lib/libSum.js';
import axios from 'axios';
import moment from 'moment';

function lodashJoin(first, second) {
  const res = _.join([first, second], ' ');
  console.log(res);
}
lodashJoin('Hello', 'webpack');



function calcSum(a, b) {
  const res = sum(a, b) ** 2;
  console.log(res);
}
calcSum(1,2);



function getJoke() {
  axios.get('http://api.icndb.com/jokes/random')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => { // Need Polyfill
    console.log('ha-ha-ha')
  });
}
getJoke();

async function getJokeAsync() {
  const res = await axios.get('http://api.icndb.com/jokes/random');
  console.log('Async', res.data);
}

getJokeAsync();



function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
}
momentCheck();


function objVal() {
  const obj = { name: 'Michael', age: 28, male: true }

  // Need Polyfill
  Object.values(obj).forEach((value) => {
    console.log(value);
  })
}

objVal();
