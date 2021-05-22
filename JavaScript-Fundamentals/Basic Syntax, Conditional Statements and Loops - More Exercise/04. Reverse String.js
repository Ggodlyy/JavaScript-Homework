function solve(string) {
    let reverse = string
    .split('')
    .reverse()
    .join('');

    console.log(reverse);
}
solve('Hello')