function solve(yeld) {
    let totalSpice = 0;
    let dayCount = 0;

    while (yeld >= 100) {
        let spice = yeld - 26;
        dayCount++;
        totalSpice += spice;
        yeld -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(dayCount);
    console.log(totalSpice);
}
solve(111)