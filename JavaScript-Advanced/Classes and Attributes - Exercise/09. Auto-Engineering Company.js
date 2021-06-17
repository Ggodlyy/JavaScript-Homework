function solve(arr) {
    let register = {};

    for (let input of arr) {
        let [brand, model, quantity] = input.split(' | ');
        quantity = Number(quantity);

        if (!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }

        if (register[brand].hasOwnProperty(model)) {
            register[brand][model] += quantity;
        } else {
            register[brand][model] = quantity;
        }
    }

    for (let key in register) {
        console.log(key);
        for (let model in register[key]) {
            console.log(`###${model} -> ${register[key][model]}`)
        }
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)