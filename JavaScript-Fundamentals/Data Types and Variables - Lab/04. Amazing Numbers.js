function solve(num) {
    let string = num.toString();
    let sum = string
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc += curr, 0);


    let result = sum.toString();

    if (result.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
solve(583472)