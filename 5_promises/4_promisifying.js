м// # PROMISIFYING
// Для чего они нужны. Чтобы упрощать работу с callback-ами и callback hell-ом
// ## httpGet
//
// npm init, npm install request --save


// # CREATE PROMISE EXAMPLES
const request = require("request");
function httpGet(url) {
  return new Promise(
    (resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {
          reject(new Error('request Error: ' + error));
        } else {
          resolve(body);
        }
      });
    });
}

httpGet('http://example.com/file.txt')
.then((value) => {
  console.log('Contents: ' + value);
})
.catch((reason) => {
  console.error('Something went wrong', reason);
});



const { readFile } = require('fs');
const p = new Promise(
(resolve, reject) => {
  readFile('test.json', { encoding: 'utf8' },
    (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
});

p.then(text => {
    console.log(text);
})
.catch(error => {
    console.log(error);
});
