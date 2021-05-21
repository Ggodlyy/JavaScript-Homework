function solve(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${arr.reduce((acc, curr) => acc += curr, 0)}`);
}
solve(5, 10)