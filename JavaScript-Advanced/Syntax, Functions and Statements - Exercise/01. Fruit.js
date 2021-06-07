function solve(fruit, grams, pricePerKg) {
    let kilograms = grams / 1000;
    let price = kilograms * pricePerKg;
    return `I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`
}
console.log(solve('orange', 2500, 1.80));
