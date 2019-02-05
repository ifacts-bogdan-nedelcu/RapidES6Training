
var blogText = "Sam I Am";

var pattern = new RegExp('am', 'g'); // first argument, the string to search
console.log(pattern instanceof RegExp);
console.log(pattern.toString());

pattern = /am/g;

console.log(pattern.test(blogText));

pattern = /m/g;
console.log(pattern.test(blogText)); // true
console.log(pattern.test(blogText)); // true, continues where lefts off
console.log(pattern.test(blogText)); // false, no third "m" found

console.log(pattern.exec(blogText)); // array with info: pattern searched, index of text, the full text
console.log(pattern.exec(blogText)); // array with info: pattern searched, next index of text, the full text




console.log('******************');
