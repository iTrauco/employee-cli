const mongoose = require('mongoose');

// map global promise - resolve error
mongoose.Promise = global.Promise;

// Connect to db
mongoose.connect('mongodb://localhost:27017/contact-manager', { useNewUrlParser: true } );
const db = mongoose.connection;

// Import model
const Employee = require('./models/employee');

// Add Employee
const addEmployee = (employee) => {
    Employee.create(employee).then(employee => {
      console.info('New Employee Added');
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

// Update employee
const updateEmployee = (_id, employee) => {
    Employee.update({ _id }, employee)
    .then(employee => {
        console.info('Customer Update')
        db.close();
    });
}

// Remove employee
const removeEmployee = (_id, employee) => {
    Employee.remove({ _id }, employee)
    .then(employee => {
        console.info('Customer Removed')
        db.close();
    });
}

// List employee
const listEmployees = () => {
    Employee.find()
    .then(employee => {
        console.info(employee);
        console.info(`${employee.length} employees`)
        db.close();
    });
}

// Export all methods
module.exports = {
    addEmployee,
    findEmployee,
    updateEmployee,
    removeEmployee, 
    listEmployees
}