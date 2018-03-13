import _ from 'lodash';
import sum from './libSum.js';
import axios from 'axios';
import moment from 'moment';

console.log('loading');

function component() {
  const res = _.join(['Hello', 'webpack'], ' ');
  console.log(res);
}
component();



function calcSum(a, b) {
  const res = sum(a, b);
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
  });
}
getJoke();



function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
}
momentCheck();
