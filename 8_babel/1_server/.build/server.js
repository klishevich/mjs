'use strict';

let getJokeAsync = (() => {
  var _ref = _asyncToGenerator(function* () {
    const res = yield _axios2.default.get('http://api.icndb.com/jokes/random');
    console.log('Async', res.data);
  });

  return function getJokeAsync() {
    return _ref.apply(this, arguments);
  };
})();

var _finally = require('core-js/fn/promise/finally');

var _values = require('core-js/fn/object/values');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _libSum = require('./lib/libSum.js');

var _libSum2 = _interopRequireDefault(_libSum);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import babelPolyfill from 'babel-polyfill';


function lodashJoin(first, second) {
  const res = _lodash2.default.join([first, second], ' ');
  console.log(res);
}
lodashJoin('Hello', 'webpack');

function calcSum(a, b) {
  const res = Math.pow((0, _libSum2.default)(a, b), 2);
  console.log(res);
}
calcSum(1, 2);

function getJoke() {
  _axios2.default.get('http://api.icndb.com/jokes/random').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  }).finally(() => {
    // Need Polyfill
    console.log('ha-ha-ha');
  });
}
getJoke();

getJokeAsync();

function momentCheck() {
  const res = (0, _moment2.default)(new Date()).format('DD/MM/YYYY hh:mm');;
  console.log(res);
}
momentCheck();

function objVal() {
  const obj = { name: 'Michael', age: 28, male: true

    // Need Polyfill
  };Object.values(obj).forEach(value => {
    console.log(value);
  });
}

objVal();