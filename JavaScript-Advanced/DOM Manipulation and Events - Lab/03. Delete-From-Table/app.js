function deleteByEmail() {
    let inputEl = document.querySelector('input[name="email"]');
    let allTd = document.querySelectorAll('tbody tr td:last-child');
    let output = document.querySelector('#result');

    let result = Array.from(allTd).find(td => td.textContent === inputEl.value);

    if (result) {
        let trEl = result.parentElement;
        trEl.remove();
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
}