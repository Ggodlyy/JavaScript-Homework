function solve(arr) {
    let obj = {};

    for (let input of arr) {
        let [name, phoneNumber] = input.split(' ');
        obj[name] = phoneNumber;
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)