var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Anne';
        var text = 'Some requests';
        var message = generateMessage(from, text);

        expect(typeof message.sentTime).toBe('number');
        expect(message).toMatchObject({from, text});
        //store response in variable

        //assert from match

        //assert text match

        //assert sentTime is number
    });
});