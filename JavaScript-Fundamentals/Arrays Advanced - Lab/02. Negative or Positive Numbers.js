function solve(arr) {
    let result = [];
    arr.forEach(e => {
        if (e >= 0) {
            result.push(e);
        } else {
            result.unshift(e);
        }
    });

    return result.join('\n');
}

console.log(solve([3, -2, 0, -1]));
