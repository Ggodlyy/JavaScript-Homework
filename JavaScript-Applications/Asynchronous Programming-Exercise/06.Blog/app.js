function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', viewPost);

    function loadPosts(e) {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    let postOptionEl = document.createElement('option');
                    postOptionEl.value = key;
                    postOptionEl.textContent = data[key].title;
                    document.querySelector('#posts').appendChild(postOptionEl);
                });
            });
    }

    function viewPost(e) {
        let input = document.querySelector('#posts');
        let postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + input.value;
        let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments/';
        console.log(postUrl);
        console.log(commentsUrl + input.value);

        Promise.all(
            [
                fetch(postUrl).then(res => res.json()),
                fetch(commentsUrl).then(res => res.json())
            ]
        ).then(([postObj, comentsObj]) => {
            let postTitle = document.querySelector('#post-title');
            let postBody = document.querySelector('#post-body');
            let commentsUl = document.querySelector('#post-comments');
            Array.from(commentsUl.children).forEach(li => li.remove());

            postTitle.textContent = postObj.title;
            postBody.textContent = postObj.body;

            Object.values(comentsObj).forEach(cObj => {
                if (cObj.postId === postObj.id) {
                    let comment = document.createElement('li');
                    comment.textContent = cObj.text;
                    comment.id = cObj.postId;
                    commentsUl.appendChild(comment);
                }
            });
        })
    }
}

attachEvents();