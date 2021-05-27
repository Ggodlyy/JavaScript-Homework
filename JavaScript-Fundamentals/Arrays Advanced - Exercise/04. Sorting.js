function solve(arr) {
    let copy = arr.slice();
    copy.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let num = copy.shift();
            result.push(num);
        } else {
            let num = copy.pop();
            result.push(num);
        }
    }

    console.log(result.join(' '));
}

console.log(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]))
