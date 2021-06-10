function calculator() {
    function init(select1, selector2, resultSelector) {
        this.firstNum = document.querySelector(select1);
        this.secondNum = document.querySelector(selector2);
        this.result = document.querySelector(resultSelector);
    }

    function add() {
        this.result.value = Number(this.firstNum.value) + Number(this.secondNum.value);
    }

    function subtract() {
        this.result.value = Number(this.firstNum.value) - Number(this.secondNum.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');






