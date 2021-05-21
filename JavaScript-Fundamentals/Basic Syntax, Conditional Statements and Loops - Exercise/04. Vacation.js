function solve(groupCount, type, day) {
    let totalPrice = 0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    totalPrice = 8.45 * groupCount;
                    break;
                case 'Saturday':
                    totalPrice = 9.80 * groupCount;
                    break;
                case 'Sunday':
                    totalPrice = 10.46 * groupCount;
                    break;
            }

            if (groupCount >= 30) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case 'Business':
            if (groupCount >= 100) {
                groupCount -= 10;
            }

            switch (day) {
                case 'Friday':
                    totalPrice = 10.90 * groupCount;
                    break;
                case 'Saturday':
                    totalPrice = 15.60 * groupCount;
                    break;
                case 'Sunday':
                    totalPrice = 16 * groupCount;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    totalPrice = 15 * groupCount;
                    break;
                case 'Saturday':
                    totalPrice = 20 * groupCount;
                    break;
                case 'Sunday':
                    totalPrice = 22.50 * groupCount;
                    break;
            }

            if (groupCount >= 10 && groupCount <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
    }

    return `Total price: ${totalPrice.toFixed(2)}`;
}
console.log(solve(40,
    "Regular",
    "Saturday"    
));