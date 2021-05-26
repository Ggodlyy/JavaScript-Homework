function solve(arr) {
    let result = arr.map((el, i) => {
        if (el % 2 === 0) {
            return el + i;
        } else {
            return el - i;
        }
    });

    console.log(result);
    console.log(arr.reduce((acc, curr) => acc += curr, 0));
    console.log(result.reduce((acc, curr) => acc += curr, 0));
}
solve([5, 15, 23, 56, 35]);