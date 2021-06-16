let lookupChar = require('../03. Char Lookup');
let assert = require('chai').assert;

describe('test for LookupChar', () => {
    it('should fail when first input is not a string', () => {
        assert.deepEqual(lookupChar([], 2), undefined);
        assert.deepEqual(lookupChar({}, 2), undefined);
        assert.deepEqual(lookupChar(2, 2), undefined);
        assert.deepEqual(lookupChar(true, 2), undefined);
        assert.deepEqual(lookupChar(undefined, 2), undefined);
        assert.deepEqual(lookupChar(null, 2), undefined);
    });

    it('should fail when second input is not a number', () => {
        assert.deepEqual(lookupChar('', 1.23), undefined);
        assert.deepEqual(lookupChar('', '1'), undefined);
        assert.deepEqual(lookupChar('', undefined), undefined);
        assert.deepEqual(lookupChar('', null), undefined);
    });

    it('should fail when index is out of string length range', () => {
        let input = 'test';
        let expectedResult = 'Incorrect index';
        assert.equal(lookupChar(input, 4), expectedResult);
        assert.equal(lookupChar(input, -1), expectedResult);
        assert.equal(lookupChar(input, 200), expectedResult);
    });

    it('should pass when both parameters are correct', () => {
        let input = 'test';
        assert.equal(lookupChar(input, 0), 't');
        assert.equal(lookupChar(input, 2), 's');
    });
});