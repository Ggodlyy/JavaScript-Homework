function solve(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (let input of arr) {
        if (typeof input !== 'number') {
            return NaN;
        }
    }

    if (start < 0) {
        start = 0;
    }

    if (end + 1 >= arr.length) {
        end = arr.length;
    }

    let slicedArr = arr.slice(start, end + 1);
    let sum = slicedArr.reduce((a, c) => a += c, 0);

    return sum;
}

console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
