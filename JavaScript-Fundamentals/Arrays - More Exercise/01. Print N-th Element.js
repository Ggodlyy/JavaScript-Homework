function solve(arr) {
    let nStep = Number(arr.pop());
    let result = [];

    for (let i = 0; i < arr.length; i += nStep) {
        result.push(arr[i]);
    }

    return result.join(' ');
}

console.log(solve(['5', '20', '31', '4', '20', '2']));
