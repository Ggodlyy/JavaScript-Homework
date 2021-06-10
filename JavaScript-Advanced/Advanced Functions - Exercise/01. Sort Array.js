function solve(arr, direction) {
    let sort = {
        asc: () => arr.sort((a, b) => a - b),
        desc: () => arr.sort((a, b) => b - a),
    };

    return sort[direction]();
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
