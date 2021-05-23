function solve(arr) {
    function palidromeThisBOY(num) {
        let string = num.toString();
        let palidrome = string.split('').reverse().join('');
        return palidrome;
    }

    for (let input of arr) {
        let palidrome = Number(palidromeThisBOY(input));

        if (input === palidrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
solve([123, 323, 421, 121])