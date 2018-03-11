// LOCAL FILE EXAMPLE
// 'use strict'
// import sum from './2export1.mjs';
// const res = sum(1,2);
// console.log(res);


// NODE MODULES EXAMPLE
// npm init
// npm install axios

// Axios is Promise based HTTP Client

import axios from 'axios';
// Make a request for a user with a given ID
axios.get('http://api.icndb.com/jokes/random')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });