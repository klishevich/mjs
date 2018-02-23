// For function calls
// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// const result = sum(...numbers);
// // const result = sum(10, ...[1, 2]);

// console.log(result);



// Spread in Array Literals (array concatination)
// const goodCoders = ['Richard Hendricks', 'Bertram Gilfoyle']; 
// const badCoders = ['Jian Yang', 'Erlich Bachman']
// const all = [...goodCoders, 'Dinesh Chugtai', ...badCoders];
// console.log(all);



// copy array (one level)
// var arr = [1, 2, 3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4); 
// console.log(arr);
// console.log(arr2);



// Spread in object literals
// Proposal State 4
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Browser support
