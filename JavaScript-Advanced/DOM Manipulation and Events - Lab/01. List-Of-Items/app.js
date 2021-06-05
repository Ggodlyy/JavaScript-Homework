function addItem() {
    let ulEL = document.querySelector('#items');
    let inputEl = document.querySelector('#newItemText');

    let li = document.createElement('li');
    li.textContent = inputEl.value;

    ulEL.appendChild(li);
    inputEl.value = '';
}