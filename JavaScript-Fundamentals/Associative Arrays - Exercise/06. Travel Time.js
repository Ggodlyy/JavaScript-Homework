function solve(arr) {
    let obj = {};

    for (let input of arr) {
        let [country, town, cost] = input.split(' > ');
        let townIfo = {
            [town]: Number(cost)
        };

        if (obj.hasOwnProperty(country)) {
            let index = obj[country].find(obj => obj.hasOwnProperty(town));

            if (index) {
                obj[country].forEach(innerObj => {
                    if (innerObj.hasOwnProperty(town)) {
                        innerObj[town] > Number(cost) ? innerObj[town] = Number(cost) : innerObj[town];
                    }
                });
                continue;
            }
        } else {
            obj[country] = [];
        }

        obj[country].push(townIfo);
    }


    let result = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let arr of result) {
        let townInfoText = [];
        arr[1].sort((a, b) => Object.values(a) - Object.values(b));

        arr[1].forEach(innerObj => {
            for (let key in innerObj) {
                townInfoText.push(`${key} -> ${innerObj[key]}`);
            }
        });

        console.log(`${arr[0]} -> ${townInfoText.join(' ')}`);
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sopot > 900",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
]
)