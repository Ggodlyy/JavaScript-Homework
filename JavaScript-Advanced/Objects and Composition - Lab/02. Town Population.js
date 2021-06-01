function solve(arr) {
    let registry = {};

    for (let input of arr) {
        let [cityName, population] = input.split(' <-> ');

        if (registry.hasOwnProperty(cityName)) {
            registry[cityName] += Number(population);
        } else {
            registry[cityName] = Number(population);
        }
    }

    for (let key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)