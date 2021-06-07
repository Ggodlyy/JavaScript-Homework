function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    Array.from(buttons).forEach(btn => btn.addEventListener('click', showInfo));

    function showInfo(e) {
        let profile = e.target.parentElement;
        let lockedInput = profile.querySelector('input[value="lock"]');

        if (!lockedInput.checked) {
            let hiddenField = profile.querySelector('div');

            if (e.target.textContent === 'Hide it') {
                hiddenField.style.display = 'none';
                e.target.textContent = 'Show more';
            } else {
                hiddenField.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        }
    }
}