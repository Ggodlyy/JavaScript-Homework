function solve(arr) {
    while (arr.length > 1) {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            let firstEl = arr[i];
            let secondEl = arr[i + 1];

            if (secondEl === undefined) {
                break;
            }

            newArr[i] = firstEl + secondEl;
        }

        arr = newArr;
    }

    return arr[0];
}

function betterSolution(arr) {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            let num = arr[i];
            let nextNum = arr[i + 1];
            arr[i] = num + nextNum;
        }
        arr.pop();
    }

    return arr[0];
}

console.log(solve([2, 10, 3]));
console.log(otherSolution([2, 10, 3]));
