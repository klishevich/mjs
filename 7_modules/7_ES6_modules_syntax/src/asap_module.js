let asap;
if (typeof window === 'undefined') {
  asap = process.nextTick;
} else {
  asap = (func) => { setTimeout(func, 2000) };
}

// DEFAULT EXPORT
export default asap;

// NAMED EXPORT var, let
export const ASAP_CONST = 'ASAP-ASAP';


// SHORTER NAMED EXPORTS
// function blaBlaBla() {
//   return 'bla-bla-bla';
// }
// export { blaBlaBla };

// export function blaBlaBla() {
//   return 'bla-bla-bla';
// }


// Grouping named exports
// function blaBlaBla1() {
//   return 'bla-bla-bla1';
// }

// function blaBlaBla2() {
//   return 'bla-bla-bla2';
// }

// function blaBlaBla3() {
//   return 'bla-bla-bla3';
// }

// export { blaBlaBla1, blaBlaBla2, blaBlaBla3 };


// export default expression;
