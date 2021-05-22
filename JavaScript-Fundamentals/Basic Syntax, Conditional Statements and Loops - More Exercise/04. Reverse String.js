function solve(string) {
    let reverse = string
    .split('')
    .reverse()
    .join('');

    
    return reverse;
}
solve('Hello')