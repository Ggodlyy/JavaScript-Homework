document.querySelector('#submit').addEventListener('click', sendInfo);
document.querySelector('#refresh').addEventListener('click', showMessages);
let textArea = document.querySelector('#messages');

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
        .then(data => {
            if (textArea.value === '') {
                textArea.value += `${data.author}: ${data.content}`
            } else {
                textArea.value += `\n${data.author}: ${data.content}`;
            }
        })
        .catch(err => console.log(err));

    nameInput.value = '';
    messageInput.value = '';
}

function showMessages(e) {
    fetch('http://localhost:3030/jsonstore/messenger')
        .then(res => res.json())
        .then(data => {
            let result = [];

            Object.values(data).forEach(objMess => {
                result.push(`${objMess.author}: ${objMess.content}`);
            });

            textArea.value = result.join('\n');
        })
        .catch(err => console.log(err));
}