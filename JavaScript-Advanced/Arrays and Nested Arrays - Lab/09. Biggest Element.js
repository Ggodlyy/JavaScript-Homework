function solve(matrix) {
    let bigNum = -Infinity;

    matrix.forEach(arr => {
        let biggesNumFromArr = Math.max(...arr);
        if (bigNum <= biggesNumFromArr) {
            bigNum = biggesNumFromArr;
        }
    });

    return bigNum;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
    ))
