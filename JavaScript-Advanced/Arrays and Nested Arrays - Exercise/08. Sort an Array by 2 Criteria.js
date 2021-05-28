function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.sort((a, b) => a.length - b.length);
    return arr.join('\n');
}

console.log(solve(['alpha', 
'beta', 
'gamma']
))
