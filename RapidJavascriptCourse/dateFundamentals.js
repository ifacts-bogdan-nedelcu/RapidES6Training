
var dt = new Date();
console.log(dt.toDateString()); // current date and time, short description
console.log(dt.toTimeString()); // current time, with information about current timezone
console.log(dt.getFullYear()); // shows year of date
dt.setFullYear(2025);
console.log(dt.getFullYear()); // shows year of date


dt = new Date(0);
console.log(dt); // standard time of 1 ian 1970

dt = new Date('2/13/2015');
console.log(dt); // standard time of 1 ian 1970

dt = new Date('March 1, 2015');
console.log(dt);

dt = new Date('Hi Mom');
console.log(dt); //Invalid Date

dt = Date.parse('Hi Mom');
console.log(dt); //NaN

dt = new Date(Date.UTC(2000, 0));
console.log(dt);

console.log('******************');