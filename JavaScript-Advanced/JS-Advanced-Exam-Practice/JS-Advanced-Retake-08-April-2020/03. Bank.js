class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let bankHasCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);
        if (bankHasCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        // if this doesn't work return toString
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this._findCustomerByID(this.allCustomers, personalId);

        if (customer.totalMoney === undefined) {
            customer.totalMoney = 0;
        }

        customer.totalMoney += amount;

        if (customer.transactions === undefined) {
            customer.transactions = [];
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this._findCustomerByID(this.allCustomers, personalId);

        if (customer.totalMoney - amount < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;

        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customer = this._findCustomerByID(this.allCustomers, personalId);

        let customerInfo = [];
        customerInfo.push(`Bank name: ${this._bankName}`);
        customerInfo.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        customerInfo.push(`Customer ID: ${customer.personalId}`);
        customerInfo.push(`Total Money: ${customer.totalMoney}$`);
        customerInfo.push('Transactions:');

        for (let i = customer.transactions.length - 1; i >= 0; i--) {
            let transaction = customer.transactions[i];
            customerInfo.push(`${i + 1}. ${transaction}`);
        }

        return customerInfo.join('\n');
    }

    _findCustomerByID(bankCustomers, personalId) {
        let customer = bankCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        return customer;
    }
}



let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));


console.log(bank.customerInfo(6233267));
