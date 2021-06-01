function solve(arr) {
    let reservationList = {
        vip: [],
        regular: []
    };

    for (let input of arr) {
        if (input === 'PARTY') {
            break;
        }

        if (isNaN(input[0])) {
            reservationList.regular.push(input);
        } else {
            reservationList.vip.push(input);
        }
    }

    let partyTime = arr.indexOf('PARTY');

    for (let i = partyTime + 1; i < arr.length; i++) {
        let guest = arr[i];

        if (reservationList.vip.includes(guest)) {
            let index = reservationList.vip.indexOf(guest);
            reservationList.vip.splice(index, 1);
        } else if (reservationList.regular.includes(guest)) {
            let index = reservationList.regular.indexOf(guest);
            reservationList.regular.splice(index, 1);
        }
    }

    let length = reservationList.vip.length + reservationList.regular.length;
    console.log(length);
    console.log(reservationList.vip.join("\n"));
    console.log(reservationList.regular.join("\n"));
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

)