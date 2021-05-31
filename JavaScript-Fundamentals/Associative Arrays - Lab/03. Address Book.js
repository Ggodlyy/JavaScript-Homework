function solve(arr) {
    let addresBook = {};

    for (let input of arr) {
        let [name, addres] = input.split(':');

        addresBook[name] = addres;
    }

    let result = Object.entries(addresBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let arr of result) {
        console.log(`${arr[0]} -> ${arr[1]}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)