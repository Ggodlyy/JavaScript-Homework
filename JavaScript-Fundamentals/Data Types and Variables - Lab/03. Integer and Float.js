function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let result = sum.toString();

    if (result.includes('.')) {
        console.log(`${sum} - Float`)
    } else {
        console.log(`${sum} - Integer`)
    }

    console.log('or');

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
solve(9, 100, 1.1);