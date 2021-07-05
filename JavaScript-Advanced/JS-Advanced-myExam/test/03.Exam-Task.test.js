let testNumbers = require('../testNumbers');
const { assert } = require("chai");


describe('testNumbers test', () => {
    describe('sumNumber method test', () => {
        it('should return undefined if inputs are not numbers', () => {
            assert.equal(testNumbers.sumNumbers('1', '2'), undefined);
            assert.equal(testNumbers.sumNumbers([], 'hey'), undefined);
            assert.equal(testNumbers.sumNumbers({}, '2'), undefined);
            assert.equal(testNumbers.sumNumbers(undefined, '2'), undefined);
            assert.equal(testNumbers.sumNumbers(null, '2'), undefined);
        });

        it('should return sum toFixed(2) in both inputs are numbers', () => {
            assert.equal(testNumbers.sumNumbers(1, 2), '3.00');
            assert.equal(testNumbers.sumNumbers(-1, 2), '1.00');
            assert.equal(testNumbers.sumNumbers(-5, -6), '-11.00');
            assert.equal(testNumbers.sumNumbers(5.5, 2.3), '7.80');
        });
    });

    describe('numberChecker method test', () => {
        it('should throw an error if input is not a number', () => {
            assert.throw(() => { testNumbers.numberChecker('h') }, 'The input is not a number!');
            assert.throw(() => { testNumbers.numberChecker('[]') }, 'The input is not a number!');
            assert.throw(() => { testNumbers.numberChecker(undefined) }, 'The input is not a number!');
        });

        it('should return even if the input is even', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(0), 'The number is even!');
            assert.equal(testNumbers.numberChecker(-2), 'The number is even!');
        });

        it('should return odd if the input is odd', () => {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(5.5), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-5), 'The number is odd!');
        });
    });

    describe('averageSumArray method test', () => {
        it('should return avgSum of input arr', () => {
            let input = [1, 2, 3];
            let expectedResult = input.reduce((a, c) => a += c, 0) / input.length;
            assert.equal(testNumbers.averageSumArray(input), expectedResult);
        });
    });
});