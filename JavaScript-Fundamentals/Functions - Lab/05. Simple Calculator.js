function solve(num1, num2, operator) {
    let operations = {
        add: (num1, num2) => { return num1 + num2 },
        subtract: (num1, num2) => { return num1 - num2 },
        multiply: (num1, num2) => { return num1 * num2 },
        divide: (num1, num2) => { return num1 / num2 },
    };

    return operations[operator](num1, num2);
}
console.log(solve(5, 5, 'multiply'));
