let rgbToHexFunc = require('../06. RGB to Hex');
let assert = require('chai').assert;

describe('RGB test', () => {
    it('Should pass if function return string in "#FF9EAA" format', () => {
        let rNum = 255;
        let rSecondNum = 0;
        let rLastNum = 0;

        let expectedResult = '#FF0000';
        let actualResult = rgbToHexFunc(rNum, rSecondNum, rLastNum);

        assert.equal(actualResult, expectedResult);
    });

    // it('Should fail if input is over 255', () => {
    //     let rNum = 300;
    //     let rSecondNum = 0;
    //     let rLastNum = 0;

    //     let expectedResult = undefined;
    //     let actualResult = rgbToHexFunc(rNum, rSecondNum, rLastNum);

    //     assert.equal(actualResult, expectedResult);
    // });

    // it('Should fail if input is under 0', () => {
    //     let rNum = -2;
    //     let rSecondNum = 0;
    //     let rLastNum = 0;

    //     let expectedResult = undefined;
    //     let actualResult = rgbToHexFunc(rNum, rSecondNum, rLastNum);

    //     assert.equal(actualResult, expectedResult);
    // });

    // it('Should fail if input is not the same type', () => {
    //     let expectedResult = undefined;

    //     assert.equal(rgbToHexFunc('', {}, undefined), expectedResult);
    //     assert.equal(rgbToHexFunc(null, [], true), expectedResult);
    //     assert.equal(rgbToHexFunc(2), expectedResult);
    //     assert.equal(rgbToHexFunc(2, 3, ), expectedResult);
    // });
});