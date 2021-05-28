function solve(arr, rotations) {
    while (rotations > 0) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);

        rotations--;
    }

    return arr.join(' ');
}
solve(['1',
    '2',
    '3',
    '4'],
    2
)