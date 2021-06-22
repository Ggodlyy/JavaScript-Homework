let pizzUni = require('../03. Pizza Place');
let assert = require('chai').assert;

describe('pizza place test', () => {
    describe('makeAnOrder method Test', () => {
        it('should have input with pizza', () => {
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: '' }) }, 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: undefined }) }, 'You must order at least 1 Pizza to finish the order.');
        });

        it('should pass when input has pizza', () => {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'Margaritta' }), 'You just ordered Margaritta');
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'bianka' }), 'You just ordered bianka');
        });

        it('should ppass when input has both prop', () => {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'Margaritta', orderedDrink: 'cola' }), 'You just ordered Margaritta and cola.');
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'peperoni', orderedDrink: 'pepsi' }), 'You just ordered peperoni and pepsi.');
        });
    });

    describe('getRemainingWork method test', () => {
        it('should return All orders are complete! if arr input is empty', () => {
            assert.equal(pizzUni.getRemainingWork([]), 'All orders are complete!');
        });

        it('should return result when arr with pizzas with status rdy is here', () => {
            let multiplePizas = [{ pizzaName: 'Margaritta', status: 'preparing' },
            { pizzaName: 'bianka', status: 'preparing' },
            { pizzaName: 'peperoni', status: 'ready' },
            { pizzaName: 'hot', status: 'preparing' }
            ];
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: 'Margaritta', status: 'preparing' }]), 'The following pizzas are still preparing: Margaritta.');
            assert.equal(pizzUni.getRemainingWork(multiplePizas), 'The following pizzas are still preparing: Margaritta, bianka, hot.')
        });
    });

    describe('orderType method test', () => {
        it('should have correct typeOfOrder input', () => {
            assert.notEqual(pizzUni.orderType(5, ''), 5);
            assert.notEqual(pizzUni.orderType(2, 12), 2);
            assert.notEqual(pizzUni.orderType(5.5, undefined), 5.5);
        });

        it('should have the correct totalSum input', () => {
            assert.notEqual(pizzUni.orderType(undefined, 'Delivery'), 5);
            assert.notEqual(pizzUni.orderType(null, 'Carry Out'), 5);
        });

        it('should return with no discount if typeOfOrder === Delivery', () => {
            assert.equal(pizzUni.orderType(5, 'Delivery'), 5);
            assert.equal(pizzUni.orderType(10, 'Delivery'), 10);
        });

        it('should return with discount if typeOfOrder === Carry Out', () => {
            assert.equal(pizzUni.orderType(5, 'Carry Out'), 4.5);
            assert.equal(pizzUni.orderType(12.5, 'Carry Out'), 11.25);
        });
    });
});