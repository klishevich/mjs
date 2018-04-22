'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _libSum = require('../../libSum.js');

var _libSum2 = _interopRequireDefault(_libSum);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lodashJoin(first, second) {
  const res = _lodash2.default.join([first, second], ' ');
  document.getElementById("join").innerHTML = res;
  console.log(res);
}
window.lodashJoin = lodashJoin;

function calcSum(a, b) {
  const res = (0, _libSum2.default)(a, b);
  document.getElementById("sum").innerHTML = res;
  console.log(res);
}
window.calcSum = calcSum;

function getJoke() {
  _axios2.default.get('http://api.icndb.com/jokes/random').then(function (response) {
    console.log(response.data);
    document.getElementById("joke").innerHTML = response.data.value.joke;
  }).catch(function (error) {
    console.log(error);
  });
}
window.getJoke = getJoke;

function momentCheck() {
  const res = (0, _moment2.default)(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
  document.getElementById('moment').innerHTML = res;
}
window.momentCheck = momentCheck;