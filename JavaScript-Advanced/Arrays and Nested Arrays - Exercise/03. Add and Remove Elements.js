function solve(arr) {
    let num = 0;
    let result = [];

    arr.forEach(c => {
        num++;

        if (c === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
    });

    if (result.length > 0) {
        return result.join('\n');
    } else {
        return 'Empty';
    }
}
solve(['add',
    'add',
    'add',
    'add']
)