// IMPORTING A MODULE
import asap from './asap_module';

function asapLog() {
  asap(()=>console.log('async'));
  console.log('sync');
}
window.asapLog = asapLog;

// NAMED IMPORT
// import { ASAP_CONST } from './asap_module';
// console.log('ASAP_CONST', ASAP_CONST);


// import asap, { ASAP_CONST } from './asap_module';


// CONVENIENCES

// Renaming named imports

// import { ASAP_CONST as some_const } from './asap_module';
// console.log('some_const', some_const);


// import { blaBlaBla } from './asap_module';
// console.log(blaBlaBla());


// Grouping named imports
// import { blaBlaBla1, blaBlaBla2, blaBlaBla3 } from './asap_module';
// console.log(blaBlaBla1());
// console.log(blaBlaBla2());
// console.log(blaBlaBla3());


// Importing into a namespace
// It can be convenient to import all of a module’s named exports into a single local namespace.
// import * as all from './asap_module';
// console.log(all.ASAP_CONST);
// console.log(all.blaBlaBla1());
// console.log(all.blaBlaBla2());
// console.log(all.blaBlaBla3());


