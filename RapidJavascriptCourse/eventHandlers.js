
function submitForm(element, event){
    console.log('in submit form');
    console.log(element.id);
    console.log(element.type);
    console.log(event.type);
}

var button = document.getElementById('submit1');

button.addEventListener('click', function(){
    console.log('Button clicked');
});

/* Event Bubbling */

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');

var clickHandler = function divClickHandler(event) {
    console.log(this.id);
    event.stopPropagation(); // only the element wich fires the event will have the chance
    event.preventDefault(); // prevent the default action of the element; 
    //if a link was clicked the will not redirect, or if the submit button on a form was clicked, prefents the form from being posted.
};

div1.addEventListener('click', clickHandler, false); // options set to true, parent element event fires up first, then the child's
div2.addEventListener('click', clickHandler, false);

console.log('******************');