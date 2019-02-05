
/* Global functions */
var value = parseInt('1234');
console.log(value); // 1234

var value = parseInt('b1234');
console.log(value); // NaN

var value = parseInt('12z34');
console.log(value); // 12; parsing stops when reaching z character

var value = parseInt('1234.9');
console.log(value); // 1234; parsing stops when reaching the decimal

var value = parseInt(' ');
console.log(value); // NaN

var value = parseInt('C000', 16); // base 16
console.log(value); // 49152

var value = parseFloat('123.9'); // base 16
console.log(value); // 123.9

var value = parseFloat('z123.9'); // base 16
console.log(value); // NaN

var value = parseFloat('1239e-1'); // you can use exponentials; e-1, move the decimal 1 position to the left
console.log(value); // NaN

var value = isFinite(42);
console.log(value); // true

var value = isFinite(Number.POSITIVE_INFINITY);
console.log(value); // false

var value = isFinite(NaN);
console.log(value); // false

var value = isNaN(NaN);
console.log(value); // true

var value = isNaN(9 / 0);
console.log(value); // false; 9 / 0 returns infinity

var path = '\\start\\';
console.log(encodeURI(path)); //%5Cstart%5C

var path = '\\start\\+';
console.log(encodeURIComponent(path)); //%5Cstart%5C%2B - + is now encoded.

var path = '%5Cstart%5C+';
console.log(decodeURI(path)); // \start\+

var globalVar = 'foo';
var code = 'console.log(globalVar)';
eval(code);

/* The Math object */
var value = Math.PI;
console.log(value);

var value = Math.abs(-42);
console.log(value); // 42

var value = Math.ceil(11.1);
console.log(value); // 12

var value = Math.floor(11.9);
console.log(value); // 11

var value = Math.trunc(42.12);
console.log(value); // 42; truncates the decimal part; remains the integer part

var value = Math.max(-12, 0, 12, "88");
console.log(value); // 88

var value = Math.pow(2, 3);
console.log(value); // 8

var value = Math.sqrt(81);
console.log(value); // 9

var value = Math.sqrt(-81);
console.log(value); // NaN

/* The String object */
var value = 'My String';
console.log(value.charAt(3)); // S
console.log(value.concat(' Lives')); // S
console.log(value.includes(' ')); // true
console.log(value.endsWith('ing')); // true
console.log(value.indexOf('M')); // 0; if it does not find it, returns -1
console.log(value.lastIndexOf('S')); // true
console.log(value.slice(5, 8));
console.log(value.split(' ').length); //2
console.log(value.substr(0, 4)); //subtring start from index 0 and takes 4 chars
console.log(value.substring(1, 4)); //subtring start from index 0 and ends with the char on the index 3

/* Arguments */
var validateValues = function () {
    console.log(arguments.length);
};

validateValues(1, true, 'Settings'); // 3

console.log('******************');