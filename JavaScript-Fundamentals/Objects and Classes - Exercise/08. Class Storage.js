class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(obj) {
        if (Object.keys(obj).length === 3) {
            this.storage.push(obj);
            this.capacity -= obj.quantity;
            this.totalCost += (obj.price * obj.quantity);
        }
    }

    getProducts() {
        let output = [];
        this.storage.forEach(obj => output.push(JSON.stringify(obj)));
        return output.join('\n')
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
