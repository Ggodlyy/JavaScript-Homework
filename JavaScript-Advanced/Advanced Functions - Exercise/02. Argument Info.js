function solve() {
    let types = {};

    for (let input of arguments) {
        let type = typeof input;

        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }

        types[type]++;
        console.log(`${typeof input}: ${input}`);
    }

    let tally = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let matrix of tally) {
        console.log(`${matrix[0]} = ${matrix[1]}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); })