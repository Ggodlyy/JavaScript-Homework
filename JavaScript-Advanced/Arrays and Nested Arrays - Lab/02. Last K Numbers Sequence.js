function solve(n, k) {
    let arr = [1];

    while (arr.length < n) {
        let start = arr.length - k

        if (start < 0) {
            start = 0;
        }

        let sum = arr
            .slice(start)
            .reduce((acc, curr) => acc += curr, 0);
        arr.push(sum);

    }

    return arr;
}

console.log(solve(6, 3))
