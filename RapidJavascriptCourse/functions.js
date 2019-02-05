
var hireEmployee = function (name) {
    throw ('Error');
}

//hireEmployee('JJ');

var action = hireEmployee;

//action('JJ'); 

var Employee = function (name, boss) {
    this.name = name;
    this.boss = boss;
};

var newEmployee = new Employee('Bogdan', 'Emilian');
console.log(typeof newEmployee);
console.log(newEmployee.name);
console.log(newEmployee.boss);

Employee = function (name) {
    this.name = name;
    this.salary = 50000;
    this.giveRaise = function (raise) {
        this.salary += raise;
    };
};

var e1 = new Employee('Bogdan');
var e2 = new Employee('Toni');
console.log(e1 === e2);
console.log(e1.__proto__ === e2.__proto__);

e1.giveRaise(100000);
console.log(e1.salary);
console.log(e2.salary);

console.log(this === window); //only if working in a browser
// if in node, returns false.

var updateSalary = function () {
    console.log(this === window);
};

updateSalary(); // still true, because the window object calls the updateSalary function

var employee = {
    name: 'Jeff',
    updateSalary: function () {
        console.log(this);
    },
    reUpdateSalary: function () {
        var fn = function () {
            console.log(this === window); // returns true, because no object calls the function, so it belongs to the window object
        };
        fn();
    }
};

employee.updateSalary(); // returns the employee object because it calls the updateSalary function

employee.reUpdateSalary();

var Address = function (line1) {
    this.line1 = line1;
    console.log(this);
}

var addr = new Address('123 State St.'); // when newing up, addr object becomes this, and it is logged to the console

/* Closures */
/* They occur at runtime 
They are functions that persist.
*/

var salaryUpdater = function (salary) {
    var currentSalary = salary;

    var generator = function () {
        currentSalary *= 2;
        return currentSalary;
    }

    return generator;
};

var updateFn = salaryUpdater(50000); // updateFn will persist the value calculated

console.log(updateFn()); //100000
console.log(updateFn()); //200000

/* IIFE - Immediately Invoked Function Expressions*/
(function () {
    console.log('Executed');
})(); // gets immediately executed

var app = {};

(function (ns) {
    ns.name = 'None';
})(app);

console.log(app.name);

/* To exclude de parans use the + unary operator*/
+function () {
    console.log('Executed');
}();

/* Recursion - a function ability to call itself */
var orgChart = {
    name: 'Michael',
    subordinates: [
        {
            name: 'Andy',
            subordinates: [
                {
                    name: 'Dwight', subordinates: []
                },
                {
                    name: 'Kevin', subordinates: []
                }   
            ]
        }

    ]
};

var fn = function (topEmployee) {
    console.log(topEmployee.name);
    for (let i = 0; i < topEmployee.subordinates.length; i++) {
        fn(topEmployee.subordinates[i]);
    }
};

fn(orgChart);

console.log('******************');