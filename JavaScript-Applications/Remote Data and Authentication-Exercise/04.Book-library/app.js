let createForm = document.querySelector('.createForm');
let editFrom = document.querySelector('.editForm');
let baseUrl = 'http://localhost:3030/jsonstore/collections/books';

document.querySelector('#loadBooks').addEventListener('click', loadBooks);
createForm.addEventListener('submit', createBook);

function loadBooks(e) {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            let output = document.querySelector('#books');
            Array.from(output.children).forEach(tr => tr.remove());

            Object.keys(data).forEach(key => {
                let bookInfo = createBookInfo(data[key].author, data[key].title, key);
                output.appendChild(bookInfo);
            });
        });
}

function createBook(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let title = formData.get('title');
    let author = formData.get('author');

    if (author === '' || title === '') {
        return;
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title
        })
    })
        .then(res => res.json())
        .then(data => {
            let book = createBookInfo(data.author, data.title, data._id);
            document.querySelector('#books').appendChild(book);
        })
        .catch(err => console.log(err));

    e.currentTarget.reset();
}

function createBookInfo(author, title, id) {
    let tr = document.createElement('tr');

    let titleTd = document.createElement('td');
    titleTd.textContent = title;

    let authorTd = document.createElement('td');
    authorTd.textContent = author;

    let buttonTdWrapper = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.setAttribute('data-id', id);
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editBook);

    function editBook(e) {
        createForm.style.display = 'none';
        editFrom.style.display = 'block';

        let bookId = e.target.getAttribute('data-id');
        let book = e.target.parentElement.parentElement;

        document.querySelector('#cancelBtn').addEventListener('click', (e) => {
            e.preventDefault();
            editFrom.style.display = 'none';
            createForm.style.display = 'block';
        });

        editFrom.addEventListener('submit', updateBook);

        function updateBook(e) {
            e.preventDefault();

            let formData = new FormData(e.currentTarget);
            let title = formData.get('title');
            let author = formData.get('author');

            if (author === '' || title === '') {
                return;
            }

            fetch(`${baseUrl}/${bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author,
                    title
                })
            })
                .then(res => res.json())
                .then(data => {
                    let bookTitleEl = book.firstElementChild;
                    bookTitleEl.textContent = data.title;

                    let bookAuthorEl = bookTitleEl.nextElementSibling;
                    bookAuthorEl.textContent = data.author;

                    console.log(data);
                })
                .catch(err => console.log(err));

            e.currentTarget.reset();
        }
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', id);
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteBook);

    function deleteBook(e) {
        let book = e.target.parentElement.parentElement;
        let bookId = e.target.getAttribute('data-id');


        fetch(`${baseUrl}/${bookId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        book.remove();
    }

    buttonTdWrapper.appendChild(editBtn);
    buttonTdWrapper.appendChild(deleteBtn);
    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(buttonTdWrapper);

    return tr;
}