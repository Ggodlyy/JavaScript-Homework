let numberOperations = require('../03. Number Operations');
let assert = require('chai').assert;

describe('numberOperation tests', function () {
    describe('powNumber method test', function () {
        it('should return num * num if a number is provided', function () {
            assert.deepEqual(numberOperations.powNumber(2), 4);
            assert.deepEqual(numberOperations.powNumber(2.2), 4.840000000000001);
        });
    });

    describe('numberChecker method test', () => {
        it('should throw error if parsedInput is equal to NaN', () => {
            assert.throw(() => { numberOperations.numberChecker('hey') }, 'The input is not a number!');
            assert.throw(() => { numberOperations.numberChecker({}) }, 'The input is not a number!');
        });

        it('should return The number is lower than 100! if it IS', () => {
            assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!');
        });

        it('should return The number is greater or equal to 100! if it IS', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(5000), 'The number is greater or equal to 100!');
        });
    });

    describe('sumArrays method test', () => {
        it('should return array with sum of both input array indexes that match', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]), [2, 4, 6]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4, 5]), [2, 4, 6, 4, 5]);
        });
    });
});
