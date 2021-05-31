function solve(arr) {
    let objects = [];

    for (let input of arr) {
        let [town, latitude, longitude] = input.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        objects.push({ town, latitude, longitude });
    }

    for (let obj of objects) {
        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)