document.querySelector('#btnLoad').addEventListener('click', loadPhonebook);

function loadPhonebook(e) {
    fetch('http://localhost:3030/jsonstore/phonebook')
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(obj => console.log(obj));
        });
}

