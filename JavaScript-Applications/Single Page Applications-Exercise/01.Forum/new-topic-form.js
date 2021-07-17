import getDate from "./helpers/date.js";
import showUserCommentPage from "./user-comment-page.js";

async function postNewTopic(e) {
    e.preventDefault();

    let form = e.target.parentElement.parentElement;

    let formData = new FormData(form);

    let title = formData.get('topicName');
    let username = formData.get('username');
    let comment = formData.get('postText');
    let time = getDate();

    let userData = {
        title,
        username,
        comment,
        time,
    };

    let validForm = validateForm(title, username, comment, form);

    if (validForm) {
        try {
            let formRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            let formResponse = await formRequest.json();
            let topic = createNewTopic(formResponse);
            document.querySelector('.topic-title').appendChild(topic);
            form.reset();
        } catch (error) {
            console.error(error);
        }

    }
}

async function clearForm(e) {
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

function createNewTopic(topicData) {
    let topicDiv = document.createElement('div');
    topicDiv.classList.add('topic-container');
    topicDiv.id = topicData._id;

    let topicNameWrapper = document.createElement('div');
    topicNameWrapper.classList.add('topic-name-wrapper');

    let topicName = document.createElement('div');
    topicName.classList.add('topic-name');

    let topicLink = document.createElement('a');
    topicLink.href = '#';
    topicLink.classList.add('normal');
    topicLink.addEventListener('click', showUserCommentPage)

    let topicTitle = document.createElement('h2');
    topicTitle.textContent = topicData.title;

    let topicColumns = document.createElement('div');
    topicColumns.classList.add('columns');

    let topicUserAndDateWrapper = document.createElement('div');

    let topicDateParagraph = document.createElement('p');
    topicDateParagraph.textContent = 'Date:'

    let currTime = document.createElement('time');
    let date = getDate();
    currTime.textContent = date;

    let topicUserWrapper = document.createElement('div');
    topicUserWrapper.classList.add('nick-name');

    let topicUserParagraph = document.createElement('p');
    topicUserParagraph.textContent = 'Username:';

    let topicUser = document.createElement('span');
    topicUser.textContent = topicData.username;

    topicUserParagraph.appendChild(topicUser);
    topicUserWrapper.appendChild(topicUserParagraph);

    topicDateParagraph.appendChild(currTime);

    topicUserAndDateWrapper.appendChild(topicDateParagraph);
    topicUserAndDateWrapper.appendChild(topicUserWrapper);

    topicColumns.appendChild(topicUserAndDateWrapper);

    topicLink.appendChild(topicTitle);
    topicName.appendChild(topicLink);
    topicName.appendChild(topicColumns);

    topicNameWrapper.appendChild(topicName);

    topicDiv.appendChild(topicNameWrapper);
 
    return topicDiv;
}


let newTopicForm = {
    clearForm,
    postNewTopic,
}


export default newTopicForm;