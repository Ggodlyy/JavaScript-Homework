function solve(currentStock, orderedStock) {
    let storage = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        storage[product] = quantity;
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        let product = orderedStock[i];
        let quantity = Number(orderedStock[i + 1]);

        if (storage.hasOwnProperty(product)) {
            storage[product] += quantity;
        } else {
            storage[product] = quantity;
        }
    }

    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)