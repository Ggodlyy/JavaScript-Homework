class Parking {
    constructor(capacity, vehicles = []) {
        this.capacity = capacity;
        this.vehicles = vehicles;
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        let car = {
            carModel,
            carNumber,
            payed: false,
        };

        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);

        if (car) {
            if (car.payed) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`);
            }

            car.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }

        throw new Error(`${carNumber} is not in the parking lot.`)
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);

        if (car) {
            if (car.payed) {
                let index = this.vehicles.findIndex(obj => obj.carNumber === carNumber);
                this.vehicles.splice(index, 1);
                return `${carNumber} left the parking lot.`;
            }

            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        throw new Error(`The car, you're looking for, is not found.`);
    }

    getStatistics(carNumber) {
        let result = [];

        if (carNumber === undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);

            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => {
                    let hasPayed = null;
                    car.payed ? hasPayed = 'Has payed' : hasPayed = 'Not payed';
                    result.push(`${car.carModel} == ${car.carNumber} - ${hasPayed}`);
                });

            return result.join('\n').trim();
        }

        let car = this.vehicles.find(car => car.carNumber === carNumber);
        let hasPayed = null;
        car.payed ? hasPayed = 'Has payed' : hasPayed = 'Not payed';
        return `${car.carModel} == ${car.carNumber} - ${hasPayed}`;
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo c500", "ha"));
console.log(parking.addCar("Volvo a400", "omg"));

console.log(parking.pay("ha"));
console.log(parking.pay("omg"));

console.log(parking.getStatistics('ha'));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


