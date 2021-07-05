class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsArray) {
        for (let input of productsArray) {
            let [productName, productQuantity, price] = input.split(' ');
            productQuantity = Number(productQuantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                if (this.stockProducts[productName] === undefined) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }

                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] !== undefined) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        this.menu[meal] = { products: neededProducts, price: price };
        let menuLength = Object.keys(this.menu).length;

        if (menuLength === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }

        return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let meals = [];

        for (let key in this.menu) {
            meals.push(`${key} - $ ${this.menu[key].price}`);
        }

        return meals.join('\n');
    }

    makeTheOrder(meal) {
        let neededMeal = this.menu[meal];

        if (!neededMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (let input of neededMeal.products) {
            let [productName, productQuantity] = input.split(' ');
            productQuantity = Number(productQuantity);

            if (this.stockProducts[productName] === undefined ||
                this.stockProducts[productName] - productQuantity < 0) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (let input of neededMeal.products) {
            let [productName, productQuantity] = input.split(' ');
            productQuantity = Number(productQuantity);

            this.stockProducts[productName] -= productQuantity;
        }

        this.budgetMoney += neededMeal.price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${neededMeal.price}.`
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


