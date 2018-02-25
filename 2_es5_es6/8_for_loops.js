// For objects
let tvShowsObj = {
  first: 'Game of Thrones',
  second: 'Black Mirror',
  third: 'Silicon Valley',
  0: 'Breaking Bad'
};

// forEach only for Arrays
Object.keys(tvShowsObj).forEach(function(key) {
  console.log(key, tvShowsObj[key]);
})

for (let key in tvShowsObj) {
  console.log(key, tvShowsObj[key]);
}

// For Arrays
let tvShowsArr = ['Game of Thrones', 'Black Mirror', 'Silicon Valley', 'Breaking Bad'];
tvShowsArr.hack = 'Someone added this to array WTF';

Object.keys(tvShowsArr).forEach(function(key) {
  console.log(key, tvShowsArr[key]);
})

for (let key in tvShowsArr) {
  console.log(key, tvShowsArr[key]);
}

tvShowsArr.forEach(function(value) {
  console.log('value', value);
})

// for of works only with iterable objects (Array, Map, Set, TypedArray, String, arguments)
for (let value of tvShowsArr) {
  console.log(value);
}
