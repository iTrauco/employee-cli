const program = require('commander');
const { prompt } = require('inquirer');
const {
    addEmployee, 
    findEmployee
} = require('./index');
//
//////==================================================================
//////==================================================================
// End User Questions
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
// 
program
    .version('1.0.0')
    .description('Employee Management System')

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addEmployee(answers));
});

program
    .command('find <name>')
    .alias('f')
    .description('Find an employee')
    .action(name => findEmployee(name));

program.parse(process.argv);


