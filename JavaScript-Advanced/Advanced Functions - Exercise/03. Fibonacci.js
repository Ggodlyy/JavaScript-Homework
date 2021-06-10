function getFibonator() {
    let num = 0;
    let next = 1;

    return function () {
        let fib = num + next;
        num = next;
        next= fib;
        return num;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
