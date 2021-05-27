function solve(arr) {
    let wagons = arr.shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(arr.shift());

    for (let input of arr) {
        let [command, passengers] = input.split(' ');

        if (command === 'Add') {
            wagons.push(Number(passengers));
        } else {
            fitPassengers(Number(command));
        }
    }

    return wagons.join(' ');

    function fitPassengers(passengers) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + passengers <= maxCapacity) {
                wagons[i] += passengers;
                break;
            }
        }
    }
}

console.log(solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));
