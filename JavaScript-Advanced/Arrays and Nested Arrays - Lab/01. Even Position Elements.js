function solve(arr) {
    let result = arr.filter((el, i) => {
        if (i % 2 === 0 || i === 0) {
            return el;
        }
    });

    return result.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));
