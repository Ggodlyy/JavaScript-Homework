function addItem() {
    let inputEl = document.querySelector('#newItemText');
    let valueEl = document.querySelector('#newItemValue');
    let menu = document.querySelector('#menu');

    let option = document.createElement('option');
    option.textContent = inputEl.value;
    option.value = valueEl.value;
    menu.appendChild(option);

    inputEl.value = '';
    valueEl.value = '';
}