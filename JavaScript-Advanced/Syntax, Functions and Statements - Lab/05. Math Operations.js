function solve(firstNum, secondNum, operator) {
    let operators = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '*': firstNum * secondNum,
        '/': firstNum / secondNum,
        '%': firstNum % secondNum,
        '**': firstNum ** secondNum,
    };

    return operators[operator];
}
console.log(solve(5, 6, '+'));
