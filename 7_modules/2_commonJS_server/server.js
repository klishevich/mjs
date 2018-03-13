// managing dependencies
// namespace collisions
// have two versions of a module

// => CommonJS and AMD modules

// LOCAL FILE EXAMPLE
const sum = require('./myModule.js');
const res = sum(1,2);
console.log(res);


// LOCAL FILE EXAMPLE 2
const myOtherModule = require('./myClassModule');
var myOtherModuleInstance = new myOtherModule();
console.log(myOtherModuleInstance.hello()); // 'hello!'
console.log(myOtherModuleInstance.bye()); // 'goodbye!'


// NODE MODULES EXAMPLE
// npm init
// npm install lodash
// moment
// axios


// Lodash
const _ = require('lodash');
function join() {
  const res = _.join(['Hello', 'webpack'], ' ');
  return res;
}
console.log(join());


// Moment
const moment = require('moment');
function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  return res;
}
console.log(momentCheck());


// Axios is Promise based HTTP Client
const axios = require('axios');
axios.get('http://api.icndb.com/jokes/random')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// Another thing to note is that CommonJS takes a server-first approach and synchronously loads modules. 
// This matters because if we have three other modules we need to require, it’ll load them one by one.

// Now, that works great on the server but, not for browser, because we need to load JS asynchronously
