function calc() {
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let sum = document.querySelector('#sum');

    sum.value = Number(num1.value) + Number(num2.value);
}
