
var blog = {
    name : "Ski Utah"
}

var updatedBlog = blog;

console.log(updatedBlog.name);

blog.name = "Rocky mountaint skying";

console.log(updatedBlog.name);

function changeBlogName(localBlog) {
    localBlog.name = "no name";
}

changeBlogName(blog);
console.log(blog.name);

var entries = new Array('Trains', 'Plains', 'Automobiles');

console.log(entries instanceof Array);
console.log(entries[0]);

console.log(entries.toString())
console.log(entries.valueOf());

console.log(entries.join('|'));
console.log(entries.join(' blah '));

var newEntries = entries.concat(['Bogdan', 'Valeriu']);
console.log(newEntries.toString());

var newEntries2 = newEntries.slice(1);
console.log(newEntries2.toString());

console.log("slice")
var newEntries2 = newEntries.slice(1, 3);
console.log(newEntries2.toString());

entries.splice(1, 2); // remove 2 elements starting with index 1
console.log(entries.toString());

entries.splice(2, 0, 99); // no element will be deleted, 99 will be inserted at index 2
console.log(entries.toString());

entries = new Array(5);
console.log(entries.length);

var ratings = [4, 1, 3, 2, 10];
ratings.sort(); // 1, 10, 2, 3, 4
console.log(ratings.toString());

ratings.sort(function (value1, value2) {
    return value1 - value2;
}); // 1, 2, 3, 4, 10
console.log(ratings.toString());


console.log('*************');