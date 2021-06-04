function solve() {
    let input = document.querySelector('#input');
    let selectMenu = document.querySelector('#selectMenuTo');
    let output = document.querySelector('#result');

    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');

    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    let btn = document.querySelector('button');
    btn.addEventListener('click', convert)

    function convert(e) {
        let result = '';
        if (selectMenu.value === 'binary') {
            result = Number(input.value).toString(2);
        } else if (selectMenu.value === 'hexadecimal') {
            result = Number(input.value)
            .toString(16)
            .toUpperCase();
        }

        output.value = result;
    }
}