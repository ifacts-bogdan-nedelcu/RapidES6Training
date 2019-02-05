+function(){
    'use strict';

    let productId = 12; // no hoisting when using let
    {
        let productId = 2000;
    }
    console.log(productId); //12; let is block scope

    const MARKUP_PCT = 10; // the variable value cannot be changed
    console.log(MARKUP_PCT); 

    /* Arrow functions */

    var getPrice = () => 5.99;
    console.log(typeof getPrice)

    var getPrice = count => count * 4.00;
    console.log(getPrice(2));

    var getPrice = (count, tax) => count * 4.00 * (1 + tax);
    console.log(getPrice(2, .07));

    var getPrice = (count, tax) => {
        var price = count * 4.00;
        price *= (1 + tax);
        return price;
    };
    console.log(getPrice(2, .07));

    document.addEventListener('click', function() {
        console.log(this);
    });

    document.addEventListener('click', () => console.log(this));

    /* Rest and Spread */
    var showCategories = function (productId, ...categories) /*... is the rest symbol*/ {
        console.log(categories); // shows categories array with its elements
    };
    showCategories(123, 'search', 'advertising');

    var price = 5.99, quantity = 10;

    var field = 'dynamicField';
    var productView = {
        price,
        quantity,
        [field]: price,
        calculateView() {
            return this.price * this.quantity;
        }
    };

    console.log(productView.calculateView());

    var categories = ['hardware', 'software', 'vaporware'];
    for (var item of categories){
        console.log(item);
    }

    var value = 0o10; // octal value
    console.log(value); // 8

    var value = 0b10; // binary value
    console.log(value); // 2

    /* Template literals */
    let invoiceNum = '1350';
    console.log(`Invoice Number: ${invoiceNum}`);

    /* Destructuring */
    let salary = ['32000', '50000', '75000'];
    let [low, average, high] = salary;
    console.log(average);

    salary = ['32000', '50000'];
    [low, average, high] = salary;
    console.log(high);

    salary = ['32000', '50000', '75000'];
    let [first, ...remaining] = salary;
    console.log(remaining);

    salary = ['32000', '50000', ['88000', '99000']];
    let [unu, doi, [trei, patru]] = salary;
    console.log(trei);

    var getPrice = function ([price, quantity]) {
        return price * quantity;
    };

    console.log(getPrice([10, 2]));

    /* advanced destructuring */
    try {
        let [high, low, ] = undefined;
        
    } catch (error) {
        console.log(error.name); //TypeError
    }

    for (let [a, b] of [[5, 10], [11, 14]]) {
        console.log(`${a} ${b}`);
    }

}();


