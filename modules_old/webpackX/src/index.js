import _ from 'lodash';
import sum from './libSum.js';
import axios from 'axios';
import moment from 'moment';

console.log('loading');

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());



function calcSum(a, b) {
  const res = sum(a, b);
  document.getElementById("sum").innerHTML = res;
  console.log(res);
}
window.calcSum = calcSum;



function getJoke() {
  axios.get('http://api.icndb.com/jokes/random')
  .then(function (response) {
    console.log(response.data);
    document.getElementById("joke").innerHTML = response.data.value.joke;
  })
  .catch(function (error) {
    console.log(error);
  });
}
window.getJoke = getJoke;



function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
  document.getElementById('moment').innerHTML = res;
}
window.momentCheck = momentCheck;

