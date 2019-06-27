const program = require('commander');
const {
    addEmployee, 
    findEmployee
} = require('./index');

program
    .version('1.0.0')
    .description('Employee Management System')

program
  .command('add <firstname> <lastname> <phone> <email>')
  .alias('a')
  .description('Add a employee')
  .action((firstname, lastname, phone, email) => {
    addEmployee({firstname, lastname, phone, email});
  });


program
    .command('find <name>')
    .alias('f')
    .description('Find an employee')
    .action(name => findEmployee(name));

program.parse(process.argv);


