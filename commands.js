const program = require('commander');
const {
    addEmployee, 
    findEmployee
} = require('./index');

program
    .version('1.0.0')
    .description('Employee Management System')

    program.parse(process.argv);


