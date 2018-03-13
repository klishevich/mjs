define(['./foo.js'], function (_foo) {
  'use strict';

  function calcSum() {
    var res = (0, _foo.sum)(1, 2);
    console.log(res);
  }

  window.calcSum = calcSum;

  // import axios from '../node_modules/axios/index.js';
  // function loadData() {
  //   axios.get('http://api.icndb.com/jokes/random')
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  // window.loadData = axios;

  // npm install --save-dev babel-cli babel-preset-es2015 babel-plugin-transform-es2015-modules-amd
  // "build": "babel 5src -d 5bundle"
  // .babelrc
  // {
  //   "presets": ["es2015"],
  //   "plugins": ["transform-es2015-modules-amd"]
  // }
});