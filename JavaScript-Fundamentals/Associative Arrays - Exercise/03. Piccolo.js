function solve(arr) {
    let cars = [];

    for (let item of arr) {
        let [direction, carNumber] = item.split(", ");

        if (direction === "IN") {
            if (!cars.includes(carNumber)) {
                cars.push(carNumber);
            }
        } else if (direction === "OUT") {
            if (cars.includes(carNumber)) {
                let index = cars.indexOf(carNumber);
                cars.splice(index, 1)
            }
        }
    }

    let sorted = cars.sort();

    if (cars.length > 0) {
        for (let number of sorted) {
            console.log(number);
        }
    } else {
        console.log("Parking Lot is Empty")
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

)