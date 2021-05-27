function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let start = result.length - k;
        if (start < 0) {
            start = 0;
        }

        let sum = result
            .slice(start)
            .reduce((acc, curr) => acc += curr, 0);

        result.push(sum);
    }

    return result.join(' ');
}

console.log(solve(8, 2))
