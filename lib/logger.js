const fs = require('fs-extra');
const path = require('path');
const bunyan = require('bunyan');
const argparse = require('./argparse');

const level = argparse.getArgValue('loglevel');
const logFilepath = path.join(argparse.getArgValue('artifacts-location') || '', 'detox.log');

const logger = bunyan.createLogger({
    name: 'detox',
    streams: [{
        level,
        stream: process.stdout,
    }, {
        level,
        path: logFilepath,
    }],
});

module.exports = logger;