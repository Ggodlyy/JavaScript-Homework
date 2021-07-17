import getDate from "./helpers/date.js";

async function postNewComment(e) {
    e.preventDefault();

    let form = e.currentTarget;

    let formData = new FormData(form);
    let username = formData.get('username');
    let comment = formData.get('postText');
    let time = getDate();

    let userComment = {
        username,
        comment,
        time,
    };

    let validForm = validateForm(username, comment, form);

    if (validForm) {
        try {
            let formRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userComment)
            })

            let formResponse = await formRequest.json();
            let responseComment = createUserComment(formResponse);
            console.log(document.querySelector('.comment'));
            document.querySelector('#new-comment').innerHTML += responseComment;
            form.reset();
        } catch (error) {
            console.error(error);
        }

    }

}

function validateForm(username, comment, form) {
    if (username === '' || comment === '') {
        alert('Missing or incorrent input');
        form.reset();
        return false;
    }

    return true;
}

function createUserComment(obj) {
    let userCommentDiv = ` <div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${obj.username}</strong> commented on <time>${obj.time}</time></p>
            <div class="post-content">
                <p>${obj.comment}</p>
            </div>
        </div>
    </div>
</div>
</div>`;


    return userCommentDiv;
}

export default postNewComment;