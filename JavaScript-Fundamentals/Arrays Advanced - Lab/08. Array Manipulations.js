function solve(arr) {
    let numbers = arr.shift()
        .split(' ')
        .map(Number);

    for (let input of arr) {
        let tokens = input.split(' ');

        switch (tokens[0]) {
            case 'Add': add(Number(tokens[1])); break;
            case 'Remove': remove(Number(tokens[1])); break;
            case 'RemoveAt': removeAt(Number(tokens[1])); break;
            case 'Insert': insert(Number(tokens[1]), Number(tokens[2])); break;
        }
    }

    return numbers.join(' ');

    function add(num) {
        numbers.push(num);
    }

    function remove(num) {
        if (numbers.includes(num)) {
            let index = numbers.indexOf(num);
            numbers.splice(index, 1);
        }
    }

    function removeAt(index) {
        if (numbers[index] !== undefined) {
            numbers.splice(index, 1);
        }
    }

    function insert(num, index) {
        if (numbers[index] !== undefined) {
            numbers.splice(index, 0, num);
        }
    }
}

console.log(solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
))
