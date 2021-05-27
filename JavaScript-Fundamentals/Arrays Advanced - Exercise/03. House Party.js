function solve(arr) {
    let guests = [];

    arr.forEach(c => {
        let tokens = c.split(' ');

        if (tokens.includes('not')) {
            if (guests.includes(tokens[0])) {
                let index = guests.indexOf(tokens[0]);
                guests.splice(index, 1);
            } else {
                console.log(`${tokens[0]} is not in the list!`);
            }
        } else {
            if (guests.includes(tokens[0])) {
                console.log(`${tokens[0]} is already in the list!`);
            } else {
                guests.push(tokens[0]);
            }
        }
    });

    return guests.join('\n');
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)