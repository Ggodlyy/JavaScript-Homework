let isOddOrEven = require('../02. Even Or Odd');
let assert = require('chai').assert;

describe('Test for Even or Odd String', () => {
    it('Should fail if an input is not a string', () => {
        let result = undefined;
        assert.equal(isOddOrEven(undefined), result);
        assert.equal(isOddOrEven(null), result);
        assert.equal(isOddOrEven(1), result);
        assert.equal(isOddOrEven(true), result);
    });

    it('Should pass when string with even length is provided', () => {
        assert.equal(isOddOrEven('some'), 'even');
        assert.equal(isOddOrEven('or'), 'even');
    });

    it('Should pass when string with odd length is provided', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
        assert.equal(isOddOrEven('hello'), 'odd');
    });
});