function solve(arr) {
    let bigNum = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        if (el >= bigNum) {
            bigNum = el;
            result.push(el);
        }
    }

    return result.join(' ');
}

function otherSolution(arr) {
    let bigNum = 0;
    let result = arr.filter(el => {
        if (el >= bigNum) {
            bigNum = el;
            return el
        }
    });

    return result.join(' ');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(otherSolution([1, 3, 8, 4, 10, 12, 3, 2, 24]))
