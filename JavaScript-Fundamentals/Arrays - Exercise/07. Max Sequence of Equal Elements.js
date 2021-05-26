function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let equal = [el];


        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (el === nextEl) {
                equal.push(nextEl);
            } else {
                break;
            }
        }

        if (result.length < equal.length) {
            result = equal;
        }
    }

    return result.join(' ');
}

console.log(solve([0, 1, 1, 5, 2, 2, 6, 3, 3]))
