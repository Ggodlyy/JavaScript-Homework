function solve(num) {
    // let oddNum = 1;
    // let sum = 0;

    // while(num > 0) {
    //     console.log(oddNum);
    //     sum += oddNum;
    //     oddNum += 2;
    //     num--;
    // }

    // console.log(`Sum: ${sum}`);

    console.log('or');

    let oddNums = [];

    for (let i = 1;; i++) {
        if (i % 2 !== 0) {
            oddNums.push(i);
        }

        if (oddNums.length === num) {
            break;
        }
    }

    console.log(oddNums.join('\n'));
    console.log(oddNums.reduce((acc, curr) => acc += curr, 0));
}
solve(5)