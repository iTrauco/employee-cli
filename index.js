const mongoose = require('mongoose');

// map global promise - resolve error
mongoose.Promise = global.Promise;

// Connect to db
mongoose.connect('mongodb://localhost:27017/contact-manager', { useNewUrlParser: true } );
const db = mongoose.connection;

// Import model
const employee = require('./models/employee');

// Add Employee
const addEmployee = (employee) => {
    employee.create(employee).then(employee => {
        console.info('New Employee Added')
        db.close();
    });
}


// Find Employee
const findEmployee = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Employee.find({$or: [{firstname: search}, {lastname: search}]}) 
    .then(employee => {
        console.info(employee);
        console.info(`${employee.length} matches`)
        db.close();
    });
}

// Export all methods
module.exports = {
    addEmployee,
    findEmployee
}