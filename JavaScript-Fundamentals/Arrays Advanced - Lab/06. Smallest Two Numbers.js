function solve(arr) {
    arr.sort((a, b) => a - b);
    return `${arr[0]} ${arr[1]}`;
}

console.log(solve([30, 15, 50, 5]));
