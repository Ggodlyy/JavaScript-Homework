function solve(firstNum, operator, secondNum) {
    let operators = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '*': firstNum * secondNum,
        '/': firstNum / secondNum,
        '%': firstNum % secondNum
    };

    return operators[operator].toFixed(2);
}
solve(5,
    '+',
    10
)