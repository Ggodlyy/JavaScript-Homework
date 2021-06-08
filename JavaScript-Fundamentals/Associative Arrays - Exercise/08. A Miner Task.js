function solve(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);

        if (result.hasOwnProperty(resource)) {
            result[resource] += quantity;
            continue;
        }

        if (quantity) {
            result[resource] = quantity;
        }
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)