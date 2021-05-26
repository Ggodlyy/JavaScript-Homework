function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let isBigger = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (el < nextEl) {
                isBigger = false;
                break;
            }
        }

        if (isBigger && !result.includes(el)) {
            result.push(el);
        }
    }

    return result.join(' ');
}

console.log(solve([27, 19, 42, 2, 13, 45, 48]));
