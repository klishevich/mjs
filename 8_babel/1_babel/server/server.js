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
  })
  // .finally(() => {
  //   console.log('ha-ha-ha')
  // });
}
getJoke();



function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
}
momentCheck();
