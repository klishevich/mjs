// All browsers and node.js support

console.log("Hello 1");

function myFunction() {
  setTimeout(function(){ console.log("Hello 2"); }, 1000); // timeout 0
}

console.log("Hello 3");

myFunction();



// Passing Params
// function myFunction2(message) {
//   setTimeout(function(){ console.log(message); }, 1000);
// }

// myFunction2('bla bla bla');



// arguments
// function myFunction3(message) {
//   setTimeout(function(){ console.log(arguments[0]); }, 1000, message);
// }

// myFunction3('murrrr...');