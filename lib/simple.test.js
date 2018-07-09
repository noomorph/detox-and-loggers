const logger = require('logger');

describe('logger', () => {
    it('should log things', () => {
        logger.info('simple');
    });

    it('should log childish things', () => {
        logger.child({ more_context: 'stuff' }).info('childish thing');
    });
});