// Template Litarals or Template Strings
const text1 = `string text`;
console.log(text1);

// MultiLine
const text2 = `string text line 1
string text line 2`;
console.log(text2);

// With placeholders
const expression = '(hi, hi, hi)';
const text3 = `string text ${expression} string text`;
console.log(text3);

// Tagged templates
var person = 'Mike';
var age = 28;
var output = myTag`that ${ person } is a ${ age }`;
console.log(output);

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "
  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];
  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return str0 + personExp + str1 + ageStr;
}
