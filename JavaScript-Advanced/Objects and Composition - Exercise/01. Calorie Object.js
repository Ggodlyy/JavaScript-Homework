function solve(arr) {
    let products = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);

        if (calories === undefined) {
            break;
        }

        products[product] = calories;
    }

    console.log(products);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])