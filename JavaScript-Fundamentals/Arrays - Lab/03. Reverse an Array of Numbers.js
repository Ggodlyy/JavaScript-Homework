function solve(n, arr) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.unshift(arr[i]);
    }

    return result.join(' ');
}

function otherSolution(n, arr) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }

    return result.reverse().join(' ');
}

console.log(solve(3, [10, 20, 30, 40, 50]));
console.log(otherSolution(3, [10, 20, 30, 40, 50]))