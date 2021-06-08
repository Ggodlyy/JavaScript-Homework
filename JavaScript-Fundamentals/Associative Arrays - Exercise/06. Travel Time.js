function solve(arr) {
    let obj = {};

    for (let input of arr) {
        let [country, town, cost] = input.split(' > ');
        cost = Number(cost);

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }

        if (!obj[country].hasOwnProperty(town)) {
            obj[country][town] = cost;
        }

        if (obj[country][town] > cost) {
            obj[country][town] = cost;
        }
    }

    let ordered = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let matrix of ordered) {
        let result = [];
        Object.values(matrix[1]).sort((a, b) => a - b);
        Object.entries(matrix[1]).forEach(kvp => {
            result.push(`${kvp[0]} -> ${kvp[1]}`);
        });
        console.log(`${matrix[0]} -> ${result.join(' ')}`);
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sopot > 200",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
]
)