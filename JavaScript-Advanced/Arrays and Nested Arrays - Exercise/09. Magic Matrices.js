function solve(matrix) {
    let sum = matrix[0].reduce((acc, curr) => acc += curr, 0);
    // let leftDiagonalSum = 0;
    // let rightDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        // leftDiagonalSum += matrix[i][i];
        // let arr = matrix[0];
        // rightDiagonalSum += matrix[((arr.length - 1) - i)][i];
        let columnSum = 0;
        let rowSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            let el = matrix[i][j];
            let otherEl = matrix[j][i];
            rowSum += el;
            columnSum += otherEl;
        }

        if (columnSum !== sum || rowSum !== sum) {
            return false;
        }
    }

    // if (leftDiagonalSum !== sum || rightDiagonalSum !== sum) {
    //     return false;
    // } else {
    //     return true;
    // }

    return true;
}
console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))
