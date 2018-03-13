import sum from './libSum.js';
// Problem with import for rollup
// import axios from 'axios/dist/axios';
import fetch from 'node-fetch';

import moment from 'moment';

console.log('loading');

function calcSum(a, b) {
  const res = sum(a, b);
  console.log(res);
  // console.log('res');
}
calcSum(1, 2);

function getJoke() {
  fetch('http://api.icndb.com/jokes/random')
  .then(res => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
}

getJoke();


function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
}

momentCheck();
