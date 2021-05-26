function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        if (Number(firstArr[i]) !== Number(secondArr[i])) {
            return `Arrays are not identical. Found difference at ${i} index`;
        }
    }

    let sum = firstArr
        .map(Number)
        .reduce((acc, curr) => acc += curr, 0);
    return `Arrays are identical. Sum: ${sum}`;
}

console.log(solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']));
