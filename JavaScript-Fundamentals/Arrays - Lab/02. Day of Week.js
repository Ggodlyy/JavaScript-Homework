function solve(num) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num <= 0 || num >= 8) {
        return `Invalid day!`;
    } else {
        return week[num - 1];
    }
}

console.log(solve(11));
