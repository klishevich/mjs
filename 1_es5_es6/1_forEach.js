// var array1 = ['a', 'b', 'c'];
// array1.forEach(function(element) {
//   console.log(element);
// });


// With index
// var citiesArray = ['Moscow', 'Novosibirsk', 'Kazan'];
// var longestCityId = 0;
// citiesArray.forEach(function (city, index) {
//   longestCityId = citiesArray[longestCityId].length < city.length ? index : longestCityId;
// });

// console.log(longestCityId);


// With array
// var points = [ [1, 2], [3, 1], [5, 5]];

// points.forEach(function(el1, index, array) {
//   var dist = 0;
//   array.forEach(function(el2) {
//     dist += Math.abs(el1[0]-el2[0]) + Math.abs(el1[1]-el2[1]);
//   });
//   console.log(index, dist/points.length);
// });



// Pass This

function CounterConstructor() {
  this.sum = 0;
  this.count = 0;
}

CounterConstructor.prototype.add = function(array) {
  console.log(this);
  array.forEach(function(entry) {
    console.log(this);
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new CounterConstructor();
obj.add([2, 5, 9]);
console.log(obj.count);
console.log(obj.sum);

