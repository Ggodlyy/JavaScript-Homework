class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product, price]) {
        price = Number(price);
        if (this.budget - price < 0) {
            throw new Error('Not enough money to buy this product');
        }

        this.budget -= price;
        this.products.push(product);

        return `You have successfully bought ${product}!`
    }

    recipes(obj) {
        for (let product of obj.productsList) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push(obj);

        return `${obj.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let hasDish = this.dishes.find(d => d.recipeName === dish);

        if (!hasDish) {
            throw new Error('We do not have this dish');
        }

        if (this.guests[name] !== undefined) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];

        for (let g in this.guests) {
            let dish = this.dishes.find(d => d.recipeName = this.guests[g]);
            let products = dish.productsList.join(', ');
            result.push(`${g} will eat ${this.guests[g]}, which consists of ${products}`);
        }

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
