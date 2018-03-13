// LOCAL FILE EXAMPLE
import sum from './myModule.mjs';
const res = sum(1,2);
console.log(res);


// LOCAL FILE EXAMPLE 2
import { myOtherModule } from './myClassModule.mjs';
var myOtherModuleInstance = new myOtherModule();
console.log(myOtherModuleInstance.hello()); // 'hello!'
console.log(myOtherModuleInstance.bye()); // 'goodbye!'


// Lodash
import _ from  'lodash';
function join() {
  const res = _.join(['Hello', 'webpack'], ' ');
  return res;
}
console.log(join());


// Moment
import moment from 'moment';
function momentCheck() {
  const res = moment(new Date()).format('DD/MM/YYYY hh:mm');;
  return res;
}
console.log(momentCheck());


// Axios is Promise based HTTP Client
import axios from 'axios';
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
