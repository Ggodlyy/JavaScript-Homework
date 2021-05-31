function solve(arr) {
    let map = new Map();

    for (let input of arr) {
        let [product, quantity] = input.split(' ');
        quantity = Number(quantity);

        if (map.has(product)) {
            let newQuantity = map.get(product, quantity) + quantity;
            map.set(product, newQuantity);
        } else {
            map.set(product, quantity);
        }
    }

    for (let product of map) {
        console.log(`${product[0]} -> ${product[1]}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)