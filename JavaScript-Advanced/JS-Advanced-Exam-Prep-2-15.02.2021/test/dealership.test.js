let dealership = require('../03. Dealership');
let assert = require('chai').assert;


describe("Tests …", function () {
    describe('newCarCost method test', function () {
        it('should return discount price for old cars', function () {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            };

            let price = 50000;

            for (let oldCar in discountForOldCar) {
                let discount = price - discountForOldCar[oldCar];
                assert.equal(dealership.newCarCost(oldCar, price), discount);
            }
        });

        it('should return new Price with correct inputs', () => {
            assert.equal(dealership.newCarCost('someCar', 20000), 20000);
            assert.equal(dealership.newCarCost('otherCar', 15.500), 15.500);
        });
    });

    describe('carEquipment method test', () => {
        it('should return new array with extras from input array with gived indexe arr', () => {
            assert.deepEqual(dealership.carEquipment(['rims', 'goldBadge', 'heated-seats'], [0, 1]), ['rims', 'goldBadge']);
            assert.deepEqual(dealership.carEquipment(['tires', 'rockets', 'sunRoof'], [0, 1, 2]), ['tires', 'rockets', 'sunRoof']);
        });
    });

    describe('euroCategory method test', () => {
        it('should return low eco if category is less than 4', () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(0), 'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(2.2), 'Your euro category is low, so there is no discount from the final price!');
        });

        it('should calculate discount if categori is 4 or higher and return discount message', () => {
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05);

            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: ${total}.`);
        });
    });
});
