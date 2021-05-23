function solve(grade) {
    let result = grade.toFixed(2);

    if (grade >= 2 && grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade >= 3 && grade < 3.50) {
        console.log(`Poor (${result})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${result})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${result})`);
    } else if (grade >= 5.50 && grade <= 6) {
        console.log(`Excellent (${result})`);
    }
}
solve(2.99)