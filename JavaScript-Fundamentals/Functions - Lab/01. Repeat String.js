function solve(string, repeat) {
    let result = '';

    while (repeat > 0) {
        result += string;

        repeat--;
    }

    return result;
}

function otherSolve(string, times) {
    return string.repeat(times);
}

solve('abc',
    3
);

console.log(otherSolve('abc',
    3));
