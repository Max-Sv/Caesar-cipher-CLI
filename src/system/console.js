let argv = require("minimist")(process.argv);

const getInputFile = () => argv.i || argv.input;
const getOutputFile = () => argv.o || argv.output;
const getShift = () => argv.s || argv.shift;
const getAction = () => argv.a || argv.action;
module.exports = {
    getInputFile,
    getOutputFile,
    getShift,
    getAction,
};
