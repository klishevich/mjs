for (var i=0; i<10; i++) {
  console.log(i);
}
console.log('after loop', i);


// function scope ES5
function loop() {
  for (var i=0; i<10; i++) {
    console.log(i);
  }
};
loop();
console.log('after loop', i);



// let
var i = 9999;
for (var i=0; i<10; i++) {
  console.log(i);
}
console.log('after loop', i);



var i = 9999;
if (true) {
  let i = 8888;
}
console.log('after loop', i);



// const 
'use strict';
let a = 1;
a = 2;
console.log(a);


'use strict';
const person = {
  name: 'Mike'
};
person.name = 'John';
console.log(person);

