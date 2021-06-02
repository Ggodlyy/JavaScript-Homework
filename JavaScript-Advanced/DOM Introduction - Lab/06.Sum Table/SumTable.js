function sumTable() {
    let sum = document.querySelector('#sum');
    let td = document.querySelectorAll('td');
    let total = 0;

    Array.from(td).forEach(td => {
        if (!isNaN(Number(td.textContent))) {
            total += Number(td.textContent);
        }
    });

    sum.textContent = total;
}