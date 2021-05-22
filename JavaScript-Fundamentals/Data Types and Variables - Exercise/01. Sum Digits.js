function solve(num) {
    let string = num.toString();
    let sum = string
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc += curr, 0);

    return sum;
}
solve(245678)