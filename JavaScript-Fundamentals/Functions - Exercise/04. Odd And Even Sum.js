function solve(number) {
    let string = number.toString();
    let arr = string.split('');
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
solve(1000435)