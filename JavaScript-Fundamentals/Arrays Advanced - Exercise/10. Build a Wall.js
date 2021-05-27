function solve(arr) {
    let limit = 30;
    let concreteInYards = 195;
    let totalConcreteInYards = [];
    let pricePerYard = 1900;

    while (arr.length > 0) {
        let concreteAmountInADay = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === limit) {
                continue;
            } else {
                arr[i]++;
                concreteAmountInADay += concreteInYards;
            }
        }

        arr = arr.filter(el => el !== limit);
        totalConcreteInYards.push(concreteAmountInADay);
    }

    let totalPrice = totalConcreteInYards.reduce((acc, curr) => acc += curr * pricePerYard, 0);
    console.log(totalConcreteInYards.join(', '));
    console.log(`${totalPrice} pesos`);
}
solve([21, 25, 28])