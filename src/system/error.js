const fs = require('fs');
const argumentErrorHandler = (shift, action) => {
    if (!shift || !action) { 
        errorHandler(new Error('Required arguments are missing: shift or action (--shift/-s int; --action/-a encode/decode)'));
    }
}
const accessFileErrorHandler = (input, output) => {
    if (input) {
        fs.access(input, fs.constants.R_OK, err => errorHandler(err));
    }
    if (output) {
        fs.access(output, fs.constants.W_OK, err => errorHandler(err));
    }
}
function errorHandler(err) {
    if (err) {
        process.stderr.write(err.message + '\n');
        process.exit(1);
    }
}

module.exports = {
    accessFileErrorHandler,
    argumentErrorHandler,
    errorHandler
}