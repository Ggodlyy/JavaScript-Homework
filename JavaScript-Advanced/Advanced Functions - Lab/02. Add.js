function solution(initialValue) {
    let obj = {
        num: initialValue,
    }

    function add(addNum) {
        let result = this.num + addNum
        return result;
    }

    let result = add.bind(obj);

    return result;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
