function solve(arr) {
    arr.sort();
    let catalogue = {};

    for (let input of arr) {
        let [product, price] = input.split(' : ');
        catalogue[product] = Number(price);
    }

    let firstLetter = '';
    for (let key in catalogue) {
        if (key[0] !== firstLetter) {
            firstLetter = key[0];
            console.log(firstLetter);
        }

        console.log(`  ${key}: ${catalogue[key]}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)