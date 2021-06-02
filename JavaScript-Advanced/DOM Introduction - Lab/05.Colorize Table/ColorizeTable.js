function colorize() {
    let tableRows = document.querySelectorAll('tr');
    Array.from(tableRows).slice(1).forEach((tr, i)=> {
        if (i % 2 === 0) {
            tr.style.backgroundColor = 'Teal';  
        }
    });
}