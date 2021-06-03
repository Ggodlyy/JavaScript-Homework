function toggle() {
    let hiddenText = document.querySelector('#extra');
    let button = document.querySelector('.button');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        button.textContent = 'Less';
    } else {
        hiddenText.style.display = 'none';
        button.textContent = 'More';
    }
}