let sumFunc = require('../04. Sum of Numbers');
let assert = require('chai').assert;

describe('Should take Array of numbers and return their sum', () => {
    it ('should add numbers', () => {
        let numbers = [1, 2, 3, 4];
        let expectedResult = 10;
        let actualResult = sumFunc(numbers);

        assert.equal(expectedResult === actualResult);
    });
});