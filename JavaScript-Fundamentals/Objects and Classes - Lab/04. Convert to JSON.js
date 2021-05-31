function solve(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };

    let json = JSON.stringify(obj);
    console.log(json);
}
solve('George',
    'Jones',
    'Brown'
)