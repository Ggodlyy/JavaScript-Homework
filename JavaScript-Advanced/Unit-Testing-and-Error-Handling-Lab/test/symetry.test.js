let isSymmetric = require('../05. Check for Symmetry');
let assert = require('chai').assert;

describe("isSymmetric(arr)", function () {
   
    it("should return false for [1,2,3,4,2,1]", function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false);
    });
  
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });

    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });

    it("should return false for 1,2,2,1", function () {
        expect (isSymmetric(1,2,2,1)).to.be.equal(false);
    });
});