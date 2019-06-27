const mongoose = require('mongoose');

// Employee schema
const employeeSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: {type: String},
    email: { type: String }
});

// Define and export
module.exports = mongoose.model('Employee', employeeSchema);

