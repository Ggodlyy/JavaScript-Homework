function solve(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 5) {
            console.log(`${i} -> True`);
            continue;
        } else if (i === 7) {
            console.log(`${i} -> True`);
            continue;
        }
        let lastNum = 0;
        let firstNum = 0;
        let sum = 0;
        if (i >= 10) {
            lastNum = i % 10;
            firstNum = Math.floor(i / 10) % 10;
            sum += firstNum + lastNum
            if (sum == 5 || sum == 7 || sum == 11) {
                console.log(`${i} -> True`);
                continue;
            }
        }
        console.log(`${i} -> False`);
    }
}
solve(15)