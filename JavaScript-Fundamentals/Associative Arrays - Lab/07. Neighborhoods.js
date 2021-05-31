function solve(arr) {
    let neighborhoods = arr.shift().split(', ');
    let obj = {};
    neighborhoods.forEach(n => obj[n] = []);


    for (let input of arr) {
        let [neighborhood, name] = input.split(' - ');

        if (neighborhoods.includes(neighborhood)) {
            obj[neighborhood].push(name);
        }
    }

    let result = Object.entries(obj).sort((a, b) => b[1].length - a[1].length);

    for (let arr of result) {
        console.log(`${arr[0]}: ${arr[1].length}`);
        arr[1].forEach(p => console.log(`--${p}`));
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)