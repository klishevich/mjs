function sum(...theArgs) {
  console.log('theArgs', theArgs);
  let res = 0;
  theArgs.forEach(el => res += el);
  console.log('res', res);
}

sum(1, 4, 5);


// with fixed args

function sumMult(multiplier, ...theArgs) {
  console.log('multiplier', multiplier);
  console.log('theArgs', theArgs);
  let res = 0;
  theArgs.forEach(el => res += el);
  const multRes = res * multiplier;
  console.log('res', multRes);
}

sumMult(2, 1, 4, 5);
