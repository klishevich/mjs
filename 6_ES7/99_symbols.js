// const a = {};
// a[Symbol.iterator]= function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// a.name = 'foo';
// console.log(0, Object.getOwnPropertyNames(a));
// console.log(1, Object.getOwnPropertySymbols(a));
// console.log(2, Reflect.ownKeys(a));



// let symbol1 = Symbol();
// console.log(String(symbol1));
// let symbol2 = Symbol('symbol2_name');
// console.log(String(symbol2));
// let symbol3 = Symbol('symbol2_name');
// console.log(String(symbol3));
// console.log(symbol2 == symbol3);



// const ar = ['one', 'two', 'three'];
// const gen = ar[Symbol.iterator]();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().done);
// console.log(gen.next().done);
// console.log(gen.next().done);



// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// var gen = myIterable[Symbol.iterator]();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



// function* idMaker() {
//   var index = 0;
//   while(true)
//     yield index++;
// }
// var gen = idMaker();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2



// function* fibonacci() {
//   var fn1 = 0;
//   var fn2 = 1;
//   while (true) {  
//     var current = fn1;
//     fn1 = fn2;
//     fn2 = current + fn1;
//     console.log(reset);
//     var reset = yield current;
//     console.log(reset);
//     if (reset) {
//         fn1 = 0;
//         fn2 = 1;
//     }
//   }
// }
// var sequence = fibonacci();
// console.log(sequence.next().value);     // 0
// console.log(sequence.next(true).value);     // 1
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 2
// console.log(sequence.next().value);     // 3
// console.log(sequence.next().value);     // 5
// console.log(sequence.next().value);     // 8
// console.log(sequence.next(true).value); // 0
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 1
// console.log(sequence.next().value);     // 2
