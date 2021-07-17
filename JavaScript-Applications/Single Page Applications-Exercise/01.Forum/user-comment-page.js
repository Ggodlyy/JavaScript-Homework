import postNewComment from "./new-comment-post.js";

async function showUserCommentPage(e) {
    let commentPage = createCommentPage(e.target.textContent)
    let main = document.querySelector('#main');
    Array.from(main.children).forEach(el => el.remove());
    main.innerHTML = commentPage;
    addFormFunction()
    createPosts();
}

function createCommentPage(title) {
    let text = `<div id="user-comment-page" class="container">
    <!-- theme content  -->
    <div class="theme-content">
        <!-- theme-title  -->
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div id="post-output" class="theme-name">
                    <h2 id="title">${title}</h2>
                </div>

            </div>
        </div>
        <!-- comment  -->

        <div id="new-comment" class="comment">

        </div>

        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form id="comment-form">
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>

    </div>
</div>
`

    return text;
}


async function createPosts() {
    try {
        let allPostValues = [];
        let postRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        let posts = await postRequest.json();

        Object.values(posts).forEach(post => {
            let postEl = `<div class="comment">
            <div class="header">
                <img src="./static/profile.png" alt="avatar">
                <p><span>${post.username}</span> posted on <time>${post.time}</time></p>
        
                <p class="post-content">${post.comment}</p>
            </div>
        </div>`;

            allPostValues.push(postEl);
        });

        let postsDiv = document.createElement('div');
        postsDiv.innerHTML = allPostValues.join('\n');
        document.querySelector('#post-output').appendChild(postsDiv);
    } catch (err) {
        console.log(err);
    }
}

function addFormFunction() {
    document.querySelector('#comment-form').addEventListener('submit', postNewComment);
}



export default showUserCommentPage;