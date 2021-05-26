function solve(firstArr, secondArr) {
    let result = firstArr.map((el, i) => {
        if (i % 2 === 0) {
            return Number(el) + Number(secondArr[i]);
        } else {
            return el + secondArr[i];
        }
    });

    return result.join(' - ');
}
console.log(solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
));
