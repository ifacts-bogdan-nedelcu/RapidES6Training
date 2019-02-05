console.log(2);

/* Global scope */

var productId = 'PRD-2000';

console.log(productId); // global object in window object
console.log(window.productId); // the same as above

console.log(this === window); // outside of a function, the scope is the window object

var description = 'hardware product';

function updateProduct() {
    description = 'updated product';
    anotherDescription = 'another product';
}

updateProduct();

console.log(description);

// if no strict mode
//if no var keyword before anotherDescription variable
// then the scope is set to global, not to function
console.log(anotherDescription); 

/* Function scope */
var description = 'original product';

function reUpdateProduct() {
    var description = 'updated product';
}

reUpdateProduct();

console.log(description);

/* Block scope */

try {
    throw 123;
    
} catch (error) { //error is availabile only in the scope of the catch block
    console.log(error);
}