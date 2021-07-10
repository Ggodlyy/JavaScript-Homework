document.querySelector('#submit').addEventListener('click', sendInfo);
document.querySelector('#refresh').addEventListener('click', showMessages);

function sendInfo(e) {
    let nameInput = document.querySelector('#author');
    let messageInput = document.querySelector('#content');

    fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: nameInput.value,
            content: messageInput.value,
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    nameInput.value = '';
    messageInput.value = '';
}

function showMessages(e) {
    let textArea = document.querySelector('#messages');

    fetch('http://localhost:3030/jsonstore/messenger')
        .then(res => res.json())
        .then(data => {
            let result = [];

            Object.keys(data).forEach(objMess => {
                result.push(`${data[objMess].author}: ${data[objMess].content}`);
            });

            textArea.value = result.join('\n');
        })
        .catch(err => console.log(err));
}