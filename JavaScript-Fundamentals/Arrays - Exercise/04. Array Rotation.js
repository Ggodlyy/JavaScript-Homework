function solve(arr, rotations) {
    while (rotations > 0) {
        let firstEl = arr.shift();
        arr.push(firstEl);

        rotations--;
    }

    return arr.join(' ');
}

console.log(solve([51, 47, 32, 61, 21], 2));
