function solve(input) {
    let result;

    if (typeof input === 'number') {
        result = (Math.PI * input ** 2).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof input}.`;
    }

    return result;
}

console.log(solve([]))
