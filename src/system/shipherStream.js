const stream = require('stream');

const getShipherStream = (algorithm, shift, action) => new stream.Transform({ objectMode: true, transform: (chunk, encoding, done) => done(null, algorithm(chunk.toString(), shift, action)) });

module.exports = { getShipherStream };