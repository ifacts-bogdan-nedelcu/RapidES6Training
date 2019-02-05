/* Addition */

var total = 5.1 + 3.3; //equal to 8.399999999... for performance, float lacks precision
console.log(total);
console.log(total.toFixed(2)); // rounds it two decimal precision

var id = 2000 + undefined; //NaN
console.log(id);

id = "PRD" + undefined;
console.log(id); // "PRDundefined"

id = 2000 + null;
console.log(id); // 2000; in a numeric context, null is treated as a 0

id = 2000 + NaN;
console.log(id); // NaN

/* Subtraction */
total = "300" - "200";
console.log(total); // 100; JS puts the strings in a numeric context, will convert the operands to numeric types;

total = "PRD300" - "ITEM200";
console.log(total); // NaN

total = 300 - undefined;
console.log(total); // NaN

total = 300 - null;
console.log(total); // 300; in a numeric context, null is treated as a 0

var obj = {
    valueOf: function () {return 100;}
};

total = 300 - obj;
console.log(total); // 200

total = 300 - NaN;
console.log(total); // NaN

total = 300 - "";
console.log(total); // 300; empty string is converted into a 0;

/* Multiplication */

total = 4 * Infinity;
console.log(total); // Infinity

/* Division */
total = 9 / 0;
console.log(total); // Infinity; other languages might throw an division by 0 error

/* Unary operators */
var level;
console.log(++level); // NaN

var level = null;
console.log(++level); // 1

var value = -42;
console.log(-value); // 42; flips the sign

console.log('****************************')