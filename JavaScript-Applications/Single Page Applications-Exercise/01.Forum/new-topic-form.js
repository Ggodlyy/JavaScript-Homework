async function createNewTopic(e) {
    e.preventDefault();

    let form = e.target.parentElement.parentElement;

    let formData = new FormData(form);

    let title = formData.get('topicName');
    let username = formData.get('username');
    let comment = formData.get('postText');

    let userData = {
        title,
        username,
        comment,
    };

    let validForm = validateForm(title, username, comment, form);

    if (validForm) {
        let formRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        let formResponse = await formRequest.json();
        console.log(formResponse);
    }
}

function clearForm(e) {
    e.preventDefault();

    let form = e.target.parentElement.parentElement;
    form.reset();
}

function validateForm(title, username, comment, form) {
    if (title === '' || username === '' || comment === '') {
        alert('Missing or incorrect inputs');
        form.reset();

        return false;
    }

    return true;
}



let newTopicForm = {
    clearForm,
    createNewTopic,
}


export default newTopicForm;