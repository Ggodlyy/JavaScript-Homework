function solve(num) {
    let englishNums = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    let numToString = num.toString();
    let lastNum = numToString[numToString.length - 1];
    console.log(englishNums[lastNum]);

    console.log ('or');

    let lastNum2 = parseInt(num % 10);
    console.log(englishNums[lastNum2]);   
}
solve(512)