function solve(num) {
    let sum = 0;
    let fail = true;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }

        if (sum === num) {
            fail = false;
            console.log('We have a perfect number!');
            break;
        }
    }

    if (fail) {
        console.log('It\'s not so perfect.')
    }
}
solve()