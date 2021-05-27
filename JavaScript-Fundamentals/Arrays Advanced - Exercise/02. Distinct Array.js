function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            continue;
        }
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr[j] = '0';
            }
        }
    }

    let result = arr.filter(e => e !== '0');

    return result.join(' ');
}

console.log(solve([20, 8, 12, 13, 4, 4, 8, 5]));
