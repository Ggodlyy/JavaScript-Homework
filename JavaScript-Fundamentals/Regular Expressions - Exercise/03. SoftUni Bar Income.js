function solve(arr = 'end of shift') {
    let input = arr.shift();
    let pattern = /\B%(?<name>[A-Z][a-z]+)%[^\|\$\%\.\d]*<(?<product>\w+)>[^\|\$\%\.\d]*\|(?<count>\d+)\|[^\|\$\%\.\d]*(?<price>\d+\.?\d*)\$\B/;
    let totalIncome = 0;

    while (input !== 'end of shift') {
        let match = pattern.exec(input);

        if (match !== null) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            totalIncome += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`)
        }

        input = arr.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])