
console.log(window.screenLeft + ", " + window.screenTop);

console.log(new Date().getSeconds());

// setTimeout(() => {
//     console.log(new Date().getSeconds());
// }, 1000);

// var id = setInterval(function() {
//     var secs = new Date().getSeconds();
//     console.log(secs);
//     if (secs > 3) {
//         clearInterval(id);
//     }
// });

/* System Dialogs */
// alert('Hello World!');

// if (confirm('Delete EVERYTHING?!')) {
//     console.log('You asked for it!');
// } else {
//     console.log('Maybe next time...');
// }

// var result = prompt("Your name?");
// console.log(result);

/* Document basics */
var element = document.getElementById('article1');
console.log(element);

var article = document.querySelector('#article1');
console.log(article);

console.log('******************');