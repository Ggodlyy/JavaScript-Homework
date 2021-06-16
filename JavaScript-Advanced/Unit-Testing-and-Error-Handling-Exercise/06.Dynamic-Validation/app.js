function validate() {
    let inputEl = document.querySelector('#email');

    inputEl.addEventListener('change', () => {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let value = inputEl.value;

        if (pattern.test(value)) {
            let classList = inputEl.classList;
            if (classList.length > 0) {
                inputEl.classList.remove('error');
            }
        } else {
            inputEl.classList.add('error');
        }
    });
}