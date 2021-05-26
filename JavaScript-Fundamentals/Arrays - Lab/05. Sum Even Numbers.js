function solve(arr) {
    return arr
        .map(Number)
        .filter(el => el % 2 === 0)
        .reduce((acc, curr) => acc += curr, 0);
}

console.log(solve(['1', '2', '3', '4', '5', '6']));
