function solve(arr) {
    let products = {};

    for (let input of arr) {
        let [town, product, price] = input.split(' | ');

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        products[product][town] = Number(price);
    }

    for (let key in products) {
        let sort = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sort[0][1]} (${sort[0][0]})`);
    }
}
solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]
)

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)