function solve(arr) {
    arr.sort().forEach((el, i) => console.log(`${i + 1}.${el}`));
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"])