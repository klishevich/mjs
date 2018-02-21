var array1 = [1, 4, 9, 16];
function double(x) {
  return 2*x;
}

var map1 = array1.map(double);
console.log(map1);


// index, array
var array1 = [1, 4, 9, 16];
var map1 = array1.map(function(element, index, array) {
  var el = {};
  el.position = index;
  el.element = element;
  var dist = 0;
  array.forEach(function(element2){
    dist += (element2 - element)*(element2 - element);
  })
  el.distance = Math.sqrt(dist);
  return el;
});
console.log(map1);
