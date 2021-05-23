function solve(product, quantity) {
    let productPrice = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    let totalPrice = productPrice[product] * quantity;
    return totalPrice.toFixed(2);
}
solve('water', 5)