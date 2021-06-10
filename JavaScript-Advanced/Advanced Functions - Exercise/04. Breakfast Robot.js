function solution() {
    let recipie = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let availabeIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let result = {
        restock,
        prepare,
        report
    };

    function restock(microEl, quantity) {
        availabeIngredients[microEl] += quantity;
        return 'Success';
    }

    function prepare(item, quantity) {
        for (let key in recipie[item]) {
            let needed = recipie[item][key] * quantity;

            if (availabeIngredients[key] < needed) {
                hasAllIngridients = false;
                return `Error: not enough ${key} in stock`
            }
        }


        for (let key in recipie[item]) {
            let needed = recipie[item][key] * quantity;
            availabeIngredients[key] -= needed;
        }

        return 'Success';
    }

    function report() {
        let result = [];

        for (let key in availabeIngredients) {
            result.push(`${key}=${availabeIngredients[key]}`);
        }

        return result.join(' ');
    }


    return function (string) {
        let [command, product, quantity] = string.split(' ');
        quantity = Number(quantity);

        return result[command](product, quantity);
    }
}



let manager = solution();
manager('restock carbohydrate 10');  
manager('restock flavour 10'); 
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');



// ['restock carbohydrate 10', 'Success'],
// ['restock flavour 10', 'Success'],
// ['prepare apple 1', 'Success'],
// ['restock fat 10', 'Success'],
// ['prepare burger 1', 'Success'],
// ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']











