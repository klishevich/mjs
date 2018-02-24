let tvShows = ['Game of Thrones', 'Black Mirror', 'Silicon Valley'];
tvShows.name = 'Michael Klishevich';
// Object.keys(tvShows).forEach(function(key) {
//   console.log(key, tvShows[key]);
// })

// for in - works with objects
// for (let key in tvShows) {
//   console.log(key, tvShows[key]);
// }

// for of works only with iterable objects (Array, Map, Set, TypedArray, String, arguments)
// ignore any non-indexed properties
for(let show of tvShows) {
  console.log(show);
}