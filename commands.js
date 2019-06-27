const program = require('commander');
const { prompt } = require('inquirer');
const {
    addEmployee, 
    findEmployee,
    updateEmployee,
    removeEmployee,
    listEmployees
} = require('./index');
//
//////==================================================================
//////==================================================================
// User Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Employee First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Employee Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Employee Work Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Employee Email'
    }
];
//
//////==================================================================
//////==================================================================
//  Program Commands | ... add, find, update, remove, list all
program
    .version('1.0.0')
    .description('Employee Management System')

// Add command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addEmployee(answers));
});

// Find command
program
    .command('find <name>')
    .alias('f')
    .description('Find an employee')
    .action(name => findEmployee(name));

// Update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update an employee')
    .action((_id) => {
        prompt(questions).then(answers => updateEmployee(_id, answers));
});

// Remove command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove an employee')
    .action(_id => removeEmployee(_id));

// List command
program
.command('list')
.alias('l')
.description('List all employees')
.action(() => listEmployees());

program.parse(process.argv);


