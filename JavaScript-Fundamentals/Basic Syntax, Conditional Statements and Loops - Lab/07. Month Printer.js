function solve(month) {
    let months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    if (months.hasOwnProperty(month)) {
        console.log(months[month])
    } else {
        console.log('Error!');
    }

    console.log('or');

    if (month <= 0 || month > 12) {
        console.log('Error!');
    } else {
        console.log(months[month]);
    }

    console.log('or');

    switch (month) {
        case 1: console.log("January"); break;
        case 2: console.log("February"); break;
        case 3: console.log("March"); break;
        case 4: console.log("April"); break;
        case 5: console.log("May"); break;
        case 6: console.log("June"); break;
        case 7: console.log("July"); break;
        case 8: console.log("August"); break;
        case 9: console.log("September"); break;
        case 10: console.log("October"); break;
        case 11: console.log("November"); break;
        case 12: console.log("December"); break;
        default: console.log("Error!"); break;
    }
}
solve(3);