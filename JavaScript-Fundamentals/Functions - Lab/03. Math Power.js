function solve(num, power) {
    return num ** power;
}

function otherSolution(num, power) {
    return Math.pow(num, power);
}
solve(2, 8);

console.log(otherSolution(2, 8))