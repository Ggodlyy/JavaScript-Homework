function solve(arr) {
    let copy = arr.slice();
    copy.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < copy.length; i++) {
        result.push(copy.pop());
        result.push(copy[i]);
    }

    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])