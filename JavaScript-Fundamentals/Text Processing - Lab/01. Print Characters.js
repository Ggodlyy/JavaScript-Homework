function solve(string) {
    let arr = string.split('');
    return arr.join('\n');
}

function otherSolve(string) {
    let arr = string.split('');

    for (let input of arr) {
        console.log(input);
    }
}


solve('AWord');
otherSolve('AWord');