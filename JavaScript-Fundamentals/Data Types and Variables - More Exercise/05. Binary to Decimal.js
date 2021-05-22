function solve(input) {
    let binaryNumber = input.toString();
    let index = 2;
    let power = 0;
    let value = 0;

    for (let i = binaryNumber.length - 1; i >= 0; i--) {
        let num = Number(binaryNumber[i]);
        if (num !== 0) {
            let calculation = index ** power;
            value += calculation;
        }
        power++;
    }

    console.log(value);
}

function otherSolution(binary) {
    let digit = parseInt(binary, 2);
    return digit;
}

solve(00001001);
console.log(otherSolution(00001001));
