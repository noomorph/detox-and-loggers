process.env['record-logs'] = 'all';
process.env['artifacts-location'] = 'tmp/simple-test/';

const logger = require('./logger');

describe('logger', () => {
    it('should log things', () => {
        logger.info('simple');
    });

    it('should log childish things', () => {
        logger.child({ more_context: 'stuff' }).info('childish thing');
    });
});