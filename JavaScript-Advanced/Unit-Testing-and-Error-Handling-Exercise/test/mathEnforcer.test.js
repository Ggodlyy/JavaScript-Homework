let mathEnforcer = require('../04. Math Enforcer');
let assert = require('chai').assert;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when input is not a number', () => {
            assert.deepEqual(mathEnforcer.addFive(''), undefined);
            assert.deepEqual(mathEnforcer.addFive({}), undefined);
            assert.deepEqual(mathEnforcer.addFive([]), undefined);
            assert.deepEqual(mathEnforcer.addFive(undefined), undefined);
            assert.deepEqual(mathEnforcer.addFive(null), undefined);
            assert.deepEqual(mathEnforcer.addFive('1'), undefined);
            assert.deepEqual(mathEnforcer.addFive('', 2), undefined);
            assert.deepEqual(mathEnforcer.addFive(true), undefined);
        });
    
        it('should return input + 5', () => {
            assert.equal(mathEnforcer.addFive(2), 7);
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-1), 4);
            assert.closeTo(mathEnforcer.addFive(1.2), 6.2, 0.01);
        });
    });

    describe('subtract10', () => {
        it('should return undefined when input is not a number', () => {
            assert.deepEqual(mathEnforcer.subtractTen(''), undefined);
            assert.deepEqual(mathEnforcer.subtractTen({}), undefined);
            assert.deepEqual(mathEnforcer.subtractTen([]), undefined);
            assert.deepEqual(mathEnforcer.subtractTen(undefined), undefined);
            assert.deepEqual(mathEnforcer.subtractTen(null), undefined);
            assert.deepEqual(mathEnforcer.subtractTen('1'), undefined);
            assert.deepEqual(mathEnforcer.subtractTen('', 2), undefined);
            assert.deepEqual(mathEnforcer.subtractTen(true), undefined);
        });
    
        it('should return the result of input from subtractTen / 10 when method is invoked with a number', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(-3), -13);
            assert.closeTo(mathEnforcer.subtractTen(20.2), 10.2, 0.01);
        });
    });
   
    describe('sum', () => {
        it('should return undefined when first param is not a number', () => {
            assert.deepEqual(mathEnforcer.sum('', 2), undefined);
            assert.deepEqual(mathEnforcer.sum({}, 2), undefined);
            assert.deepEqual(mathEnforcer.sum([], 2), undefined);
            assert.deepEqual(mathEnforcer.sum(undefined, 2), undefined);
            assert.deepEqual(mathEnforcer.sum(null, 2), undefined);
            assert.deepEqual(mathEnforcer.sum('1', 2), undefined);
            assert.deepEqual(mathEnforcer.sum(true, 2), undefined);
        });
    
        it('should return undefined when second param is not a number', () => {
            assert.deepEqual(mathEnforcer.sum(2, ''), undefined);
            assert.deepEqual(mathEnforcer.sum(2, {}), undefined);
            assert.deepEqual(mathEnforcer.sum(2, []), undefined);
            assert.deepEqual(mathEnforcer.sum(2, undefined), undefined);
            assert.deepEqual(mathEnforcer.sum(2, null), undefined);
            assert.deepEqual(mathEnforcer.sum(2, '1'), undefined);
            assert.deepEqual(mathEnforcer.sum(2, true), undefined);
        });
    
        it('should return the sum of both parameters', () => {
            assert.equal(mathEnforcer.sum(10, 5), 15);
            assert.equal(mathEnforcer.sum(2, 0), 2);
            assert.equal(mathEnforcer.sum(-1, 4), 3);
            assert.closeTo(mathEnforcer.sum(5.5, 2.3), 7.8, 0.01);
        });
    });
});