function solve(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    let result = numbers.sort((a, b) => b - a);
    console.log(result.join('\n'));

    console.log('or');

    let maxNum = Number.MIN_SAFE_INTEGER;
    let arr = [];

    for (let i = 0; i < arguments.length; i++) {
        let num = arguments[i];

        if (num > maxNum) {
            maxNum = num;
            arr.unshift(maxNum);
        } else {
            arr.push(num);
        }
    }

    console.log(arr.join('\n'));
}
solve(2, 1, 3)