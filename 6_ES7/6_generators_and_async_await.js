// // PROMISES
// const fetch = require('node-fetch');
// function fetchJson(url) {
//     return fetch(url)
//     .then(request => request.text())
//     .then(text => {
//       return JSON.parse(text);
//     })
//     .catch(error => {
//         console.log(`ERROR: ${error.stack}`);
//     });
// }
// fetchJson('http://api.icndb.com/jokes/random')
// .then(obj => console.log(obj));



// // ASYNC/AWAIT
// const fetch = require('node-fetch');
// async function fetchJson(url) {
//   try {
//     let request = await fetch(url);
//     let text = await request.text();
//     return JSON.parse(text);
//   }
//   catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//   }
// }
// fetchJson('http://api.icndb.com/jokes/random')
// .then(obj => console.log(obj));



// // ITERATORS
// function makeIterator(ar) {
//   var nextIndex = 0;
//   return {
//     next: () => ( nextIndex < ar.length ? { value: ar[nextIndex++], done: false } : { done: true })
//   };
// }
// var it = makeIterator(['one', 'two']);
// console.log(it.next().value); // 'one'
// console.log(it.next().value); // 'two'
// console.log(it.next().done);  // true



// // GENERATORS - Factories for Iterators
// function* makeGenerator() {
//   var ar = ['one', 'two'];
//   var nextIndex = 0;
//   while(nextIndex < ar.length)
//     yield ar[nextIndex++];
// }
// var gen = makeGenerator();
// console.log(gen.next().value); // 'one'
// console.log(gen.next().value); // 'two'
// console.log(gen.next().done);  // true



// // MY ASYNC/AWAIT
// const fetch = require('node-fetch');
// function* myGeneratorAsyncFetchJson(url) {
//   try {
//     let request = yield fetch(url);
//     let text = yield request.text();
//   }
//   catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//   }
// }
// const gen = myGeneratorAsyncFetchJson('http://api.icndb.com/jokes/random');
// gen.next().value
//   .then((res) => gen.next(res).value)
//   .then(res => { console.log(res); })

// // better variant
// const fetch = require('node-fetch');
// function myAsyncFetchJson(url, generatorFunc) {
//   const gen = generatorFunc(url);
//   gen.next().value
//     .then((res) => gen.next(res).value)
//     .then(res => { console.log(res); })
// }

// myAsyncFetchJson('http://api.icndb.com/jokes/random', function* (url) {
//   try {
//     let request = yield fetch(url);
//     let text = yield request.text();
//   }
//   catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//   }
// })
