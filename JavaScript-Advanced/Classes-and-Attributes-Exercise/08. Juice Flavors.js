function solve(arr) {
    let juices = {};
    let result = {};

    for (let input of arr) {
        let [juiceName, quantity] = input.split(' => ');

        if (juices.hasOwnProperty(juiceName)) {
            juices[juiceName] += Number(quantity);
        } else {
            juices[juiceName] = Number(quantity);
        }

        while (juices[juiceName] >= 1000) {
            if (result.hasOwnProperty(juiceName)) {
                result[juiceName]++;
            } else {
                result[juiceName] = 1;
            }

            juices[juiceName] -= 1000;
        }
    }

    for (let key in result) {
        console.log(`${key} => ${result[key]}`);
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)