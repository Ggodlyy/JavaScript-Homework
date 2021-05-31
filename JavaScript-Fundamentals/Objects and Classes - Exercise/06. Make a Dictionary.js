function solve(arr) {
    let dictionary = {};

    for (let input of arr) {
        let obj = JSON.parse(input);
        let term = Object.keys(obj)[0];
        let definition = Object.values(obj)[0];

        dictionary[term] = definition;
    }

    let matrix = Object.entries(dictionary);

    matrix.sort((a, b) => a[0].localeCompare(b[0]));

    for (let arr of matrix) {
        console.log(`Term: ${arr[0]} => Definition: ${arr[1]}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)