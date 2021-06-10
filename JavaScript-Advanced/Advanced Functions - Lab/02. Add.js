function solution(initialValue) {
    let num = initialValue;

    return function (addNum) {
        let result = num + addNum
        return result;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
