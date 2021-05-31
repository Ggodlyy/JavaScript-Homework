function solve(arr) {
    let catalogue = [];

    for (let input of arr) {
        let [product, price] = input.split(' : ');
        let obj = {};
        obj[product] = Number(price)
        catalogue.push(obj);
    }

    catalogue.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
    let firstLetter = '';
    catalogue.forEach(obj => {
        let key = Object.keys(obj)[0];
        let value = Object.values(obj)[0];
        let letter = key[0];

        if (firstLetter !== letter) {
            firstLetter = letter;
            console.log(firstLetter);
        }

        console.log(`  ${key}: ${value}`);
    })
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])