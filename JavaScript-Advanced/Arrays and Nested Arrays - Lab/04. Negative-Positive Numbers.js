function solve(arr) {
    let result = [];
    arr.forEach(el => {
        if (el >= 0) {
            result.push(el);
        } else {
            result.unshift(el);
        }
    });

    return result.join('\n');
}
solve([7, -2, 8, 9])