function solve(arr, critetria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    arr.forEach(input => {
        let [destination, price, status] = input.split('|');
        tickets.push(new Ticket(destination, price, status));
    });

    if (critetria === 'price') {
        tickets.sort((a, b) => a[critetria] - b[critetria]);
    } else {
        tickets.sort((a, b) => a[critetria].localeCompare(b[critetria]));
    }

    // Another way with a compare function

    //tickets.sort(sortThem);

    // function sortThem(a, b) {
    //     if (critetria === 'price') {
    //         return a[critetria] - b[critetria];
    //     } else {
    //         return a[critetria].localeCompare(b[critetria]);
    //     }
    // }

    return tickets;
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)