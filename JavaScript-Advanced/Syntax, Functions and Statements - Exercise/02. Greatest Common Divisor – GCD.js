function solve(firstNum, secondNum) {
    let biggestNum = Math.max(firstNum, secondNum);

    for (let i = biggestNum; i > 0; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            return i;
        }
    }
}
console.log(solve(2154, 458))
