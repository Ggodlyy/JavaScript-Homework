function solve(arr) {
    let parkingLot = {};

    for (let input of arr) {
        let [direction, car] = input.split(', ');

        if (direction === 'IN') {
            let carNumber = car
                .split('')
                .filter(el => !isNaN(el))
                .join('');

            parkingLot[car] = Number(carNumber);
        } else {
            if (parkingLot.hasOwnProperty(car)) {
                delete parkingLot[car];
            }
        }
    }

    let result = Object.entries(parkingLot).sort((a, b) => a[1] - b[1]);

    if (result.length > 0) {
        for (let arr of result) {
            console.log(arr[0]);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

)