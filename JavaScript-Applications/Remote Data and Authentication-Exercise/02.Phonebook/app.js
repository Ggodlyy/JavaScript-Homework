document.querySelector('#btnLoad').addEventListener('click', loadPhonebook);
document.querySelector('#btnCreate').addEventListener('click', createPhoneInfo);

function loadPhonebook(e) {
    fetch('http://localhost:3030/jsonstore/phonebook')
        .then(res => res.json())
        .then(data => {
            let output = document.querySelector('#phonebook');
            Array.from(output.children).forEach(tr => tr.remove());

            Object.values(data).forEach(obj => {
                let phoneInfo = createPhoneInfo(obj.person, obj.phone, obj._id);
                output.appendChild(phoneInfo);
            });
        })
        .catch(err => console.log(err));

    function createPhoneInfo(name, phone, id) {
        let trEl = document.createElement('tr');

        let nameTd = document.createElement('td');
        nameTd.textContent = name;

        let phoneTd = document.createElement('td');
        phoneTd.textContent = phone;

        let btnTdWrapper = document.createElement('td');

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('data-id', id);
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deletePersonInfo);

        function deletePersonInfo(e) {
            let id = e.target.getAttribute('data-id');

            fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }

        btnTdWrapper.appendChild(deleteBtn);
        trEl.appendChild(nameTd);
        trEl.appendChild(phoneTd);
        trEl.appendChild(btnTdWrapper);

        return trEl;
    }
}

function createPhoneInfo(e) {
    let personInput = document.querySelector('#person');
    let phoneInput = document.querySelector('#phone');

    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            person: personInput.value,
            phone: phoneInput.value
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    personInput.value = '';
    phoneInput.value = '';
    loadPhonebook();
}


