function solve(arr) {
    let input = arr.shift();
    let total = 0;
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;

    console.log('Bought furniture:');

    while (input !== 'Purchase') {
        let match = pattern.exec(input);

        if (match !== null) {
            total += (Number(match.groups.price) * Number(match.groups.quantity));
            console.log(match.groups.furniture);
        }

        input = arr.shift();
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])