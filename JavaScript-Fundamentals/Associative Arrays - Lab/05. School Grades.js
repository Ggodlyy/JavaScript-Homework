function solve(arr) {
    let schoolInfo = {};

    for (let input of arr) {
        let tokens = input.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number);

        if (schoolInfo.hasOwnProperty(name)) {
            grades.forEach(g => schoolInfo[name].push(g));
        } else {
            schoolInfo[name] = grades;
        }
    }

    let result = Object.entries(schoolInfo)
        .sort((a, b) => {
            let firstStudentAvgGrade = a[1].reduce((a, c) => a += c, 0) / a[1].length;
            let secondStudentAvgGrade = b[1].reduce((a, c) => a += c, 0) / b[1].length;

            if (firstStudentAvgGrade < secondStudentAvgGrade) {
                return -1;
            }

            if (firstStudentAvgGrade > secondStudentAvgGrade) {
                return 1;
            }

            return 0;
        });

    for (let arr of result) {
        console.log(`${arr[0]}: ${arr[1].join(', ')}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)