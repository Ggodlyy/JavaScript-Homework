function solve(arr) {
    let num = 1;
    let result = [];

    arr.forEach(el => {
        if (el === 'add') {
            result.push(num);
        } else if (el === 'remove') {
            result.pop();
        }

        num++;
    });

    if (result.length > 0) {
        return result.join(' ');
    } else {
        return 'Empty';
    }
}

console.log(solve(['add', 'add', 'add', 'add']));
