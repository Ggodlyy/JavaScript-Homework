function solve(arr) {
    let result = arr.filter((el, i) => i % 2 === 0);
    return result.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));
