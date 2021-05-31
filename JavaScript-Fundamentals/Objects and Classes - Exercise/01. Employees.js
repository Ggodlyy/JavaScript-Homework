function solve(arr) {
    let obj = {};

    for (let input of arr) {
        obj[input] = input.length;
    }

    for (let key in obj) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)