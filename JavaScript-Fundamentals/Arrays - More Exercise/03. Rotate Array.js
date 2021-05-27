function solve(arr) {
    let rotations = Number(arr.pop());

    while (rotations > 0) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);

        rotations--;
    }

    return arr.join(' ');
}

console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
