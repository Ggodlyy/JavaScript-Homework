function solve(n) {
    for (let i = 1; i <= n; i++) {
        let result = [];
        for (let j = 0; j < i; j++) {
            result.push(i);
        }

        console.log(result.join(' '));
    }

    console.log('or');

    for (let i = 1; i <= n; i++) {
        let result = '';
        for (let j = 0; j < i; j++) {
            result += ` ${i}`;
        }

        console.log(result.trim());
    }
}
solve(3)