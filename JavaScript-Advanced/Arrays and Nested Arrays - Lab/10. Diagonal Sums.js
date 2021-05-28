function solve(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[(matrix.length - 1) - i][i];
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)
