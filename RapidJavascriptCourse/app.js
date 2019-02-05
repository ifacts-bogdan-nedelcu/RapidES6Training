'use strict';

var orderID = 9001;

console.log(orderID);

console.log(typeof orderID);

var order = {
    orderID: 9001,
    isActive: true
};

console.log(typeof order);

var cancelledOrders = [9001, 9002, 9003];

console.log(typeof cancelledOrders);

var nullObject = null;

console.log(typeof nullObject);

function cancelOrder(orderID) {

}

console.log(typeof cancelOrder);

var activateOrder = function () {
    console.log('Order activated');
}

console.log(typeof activateOrder);

switch (true) {
    case 10 > 20:
        console.log('gresit');
        break;

    default:
    console.log('true');
        break;
}
var lineCount = 3;
var currentItem = 0;

while (currentItem < lineCount) {
    console.log('item: ' + currentItem);
    currentItem++;
}

var lineCount = 3;
var currentItem = undefined;

do {
    console.log('item: ' + currentItem);
    currentItem++;
} while (currentItem < lineCount);

var lineItemCount = 5;

outerLoop:
for (let i = 0; i < lineItemCount; i++) {
    for (let j = 0; j < 3; j++) {
        if (j==1) {
            continue outerLoop;
        }
    }
    console.log(i);
}

var lineItem = {
    product: "Widget 1",
    quantity: 4,
    price: 9.50
}

for (var field in lineItem) {
    console.log(field + " : " + lineItem[field]);
}

console.log(1);