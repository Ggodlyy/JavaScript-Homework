function addItem() {
    let ulEL = document.querySelector('#items');
    let inputEl = document.querySelector('#newItemText');

    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', remove);
    li.textContent = inputEl.value;

    function remove(e) {
        let li = e.target.parentElement;
        li.remove();
    }

    li.appendChild(a);
    ulEL.appendChild(li);
    inputEl.value = '';
}