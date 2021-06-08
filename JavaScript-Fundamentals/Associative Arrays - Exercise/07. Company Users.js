function solve(arr) {
    let obj = {};

    for (let input of arr) {
        let [company, id] = input.split(' -> ');

        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }

        if (!obj[company].includes(id)) {
            obj[company].push(id);
        }
    }

    let sort = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let matrix of sort) {
        console.log(matrix[0]);
        matrix[1].forEach(em => console.log(`-- ${em}`));
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)