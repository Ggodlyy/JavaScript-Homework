function solve(arr, nStep) {
    let result = [];

    for (let i = 0; i < arr.length; i += nStep) {
        result.push(arr[i]);
    }

    return result;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)