function solve(arr) {
    return arr
        .map(Number)
        .filter(el => el % 2 === 0)
        .reduce((acc, curr) => acc += curr, 0);
}

function otherSolution(arr) {
    let sum = 0;

    for (let input of arr) {
        if (Number(input) % 2 === 0) {
            sum += Number(input);
        }
    }

    return sum;
}

console.log(solve(['1', '2', '3', '4', '5', '6']));
