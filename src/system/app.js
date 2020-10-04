const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const { getShipherStream } = require('./shipherStream');
const { getAlgorithm } = require('./algorithm');
const { accessFileErrorHandler, argumentErrorHandler, errorHandler } = require("./error");
const pipelineAsync = promisify(pipeline);


class App {
    constructor(inputFile, outputFile, shift, action) {
        this.readableStream = inputFile ? fs.createReadStream(inputFile) : process.stdin;
        this.writableStream = outputFile ? fs.createWriteStream(outputFile, { flags: 'a' }) : process.stdout;
        this.shift = shift;
        this.action = action;
        this.inputFile = inputFile;
        this.outputFile = outputFile;
    }
    async run() {
        try {
            this.shipherStream = getShipherStream(getAlgorithm, this.shift, this.action);
            await pipelineAsync(
                this.readableStream,
                this.shipherStream,
                this.writableStream,
            );
            await  process.stdout.write('Operation was a success');
        }
        catch (err) {
            errorHandler(err);
        }
    }
    checkErorr() {
        try {
            argumentErrorHandler(this.shift, this.action);
            accessFileErrorHandler(this.inputFile, this.outputFile);
        }
        catch (err) {
            errorHandler(err);
        }
    }
}


module.exports = App;