function solve(arr) {
    let k = arr.shift();

    let first = arr.slice(0, k);
    let last = arr.slice(arr.length - k);

    console.log(first.join(' '));
    console.log(last.join(' '));
}
solve([3,
    6, 7, 8, 9]
)   