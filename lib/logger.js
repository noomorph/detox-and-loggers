const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const bunyan = require('bunyan');
const bunyanDebugStream = require('bunyan-debug-stream');
const argparse = require('./argparse');

const level = argparse.getArgValue('loglevel');
const logFilepath = path.join(argparse.getArgValue('artifacts-location') || '', 'detox.log');
const shouldRecordLogs = ['failing', 'all'].includes(argparse.getArgValue('record-logs'));

const consoleStream = {
    level,
    type: 'raw',
    stream: bunyanDebugStream({ basepath: __dirname }),
    serializers: bunyanDebugStream.serializers,
};

const fileStream = shouldRecordLogs ? {
    level,
    path: logFilepath,
} : null;

if (fileStream) {
    fs.ensureFileSync(fileStream.path);
}

const logger = bunyan.createLogger({
    name: 'detox',
    streams: _.compact([consoleStream, fileStream]),
});

module.exports = logger;