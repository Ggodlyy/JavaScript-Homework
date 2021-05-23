function solve(first, second, third) {
    let sum = function (first, second) { return first + second };
    let subtract = function (third) { return sum(first, second) - third };

    return subtract(third)
}

console.log(solve(23, 6, 10));
