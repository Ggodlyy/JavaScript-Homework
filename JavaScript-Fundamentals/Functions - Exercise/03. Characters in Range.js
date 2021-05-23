function solve(char1, char2) {
    let start = 0;
    let end = 0;
    let nums = [];
    let result = '';

    for (let input of arguments) {
        let num = input.charCodeAt(0);
        nums.push(num);
    }

    start = Math.min(...nums);
    end = Math.max(...nums);

    for (let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `;
    }

    return result;
}
console.log(solve('a',
    'd'
));
