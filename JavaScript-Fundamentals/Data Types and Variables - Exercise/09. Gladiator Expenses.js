function solve(lossFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let i = 1; i <= lossFightsCount; i++) {
        if (i % 12 === 0) {
            expenses += armorPrice;
        }

        if (i % 6 === 0) {
            expenses += shieldPrice;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
        }

        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
    }

    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}
solve(23,
    12.50,
    21.50,
    40,
    200

)