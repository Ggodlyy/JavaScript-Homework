function solve(num) {
    let string = num.toString();
    let arr = string.split('');
    let first = arr[0];
    let sum = 0;
    let invalid = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            invalid = true;
        }

        sum += Number(arr[i]);
    }

    if (invalid) {
        console.log('false');
    } else {
        console.log('true');
    }

    console.log(sum);
}
solve(2222222)