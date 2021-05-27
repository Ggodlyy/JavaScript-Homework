function solve(numbers, specialBomb) {
    let bomb = specialBomb[0];
    let power = specialBomb[1];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num === bomb) {
            let start = i - power;

            if (start < 0) {
                start = 0;
            }

            let noMandsLand = [];
            let explosionLength = (power * 2) + 1;
            noMandsLand.length = explosionLength;
            noMandsLand.fill(0);
            numbers.splice(start, explosionLength, ...noMandsLand);
        }
    }

    let result = numbers.filter(el => el != 0);

    return result.reduce((acc, curr) => acc += curr, 0);
}

console.log(solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
))
