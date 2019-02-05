
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function () {
    return true;
};
console.log(project.name);
console.log(project['name']);
console.log(project.updateDueDate());

project = {};
project.name = 'Alt nume';
console.log(project.name);

project = {
    name: "Project Phoenix",
    securityLevel: 15,
    updateDueDate: function () {
        return true;
    }
};
console.log(project.updateDueDate());

//console.log(project.foo()); // TypeError, function does not exist

var project = {
    securityLevel: 2
};

var secretProject = Object.create(project); // project becomes the prototype for secretProject
console.log(secretProject.securityLevel);

//define a property
Object.defineProperty(secretProject, 'name', {value: 'Philadelphia', writable: true});
secretProject.name = 'CEva';
console.log(secretProject.name);

var task = {
    _dueDate: '1/15/16'
};

Object.defineProperty(task, 'dueDate', {
    get: function() {
        return this._dueDate;
    },
    set: function(newValue) {
        this._dueDate = newValue;
    }
});

console.log(task.dueDate);
task.dueDate = '1/16/16';
console.log(task.dueDate);


console.log('******************');