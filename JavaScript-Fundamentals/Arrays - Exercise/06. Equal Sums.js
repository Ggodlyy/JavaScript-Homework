function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSideSum = 0;
        let rightSideSum = 0;

        for (let j = 0; j < i; j++) {
            leftSideSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSideSum += arr[k];
        }

        if (leftSideSum === rightSideSum) {
            return i;
        }
    }

    return 'no';
}

console.log(solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]))
