function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(e => {
        if (e % 2 === 0) {
            evenSum += e;
        } else {
            oddSum += e;
        }
    });

    return evenSum - oddSum;
}

function otherSolution(arr) {
    let evenSum = arr.filter(el => el % 2 === 0).reduce((acc, curr) => acc += curr, 0);
    let oddSUm = arr.filter(el => el % 2 !== 0).reduce((acc, curr) => acc += curr, 0);

    return evenSum - oddSUm;
}

console.log(solve([1, 2, 3, 4, 5, 6]));
console.log(otherSolution([1, 2, 3, 4, 5, 6]));