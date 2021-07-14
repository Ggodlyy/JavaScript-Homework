let main = document.querySelector('main');
let nav = document.querySelector('nav');
let homeBtn = document.querySelector('#home');
let logoutBtn = document.querySelector('#logout');
let loginBtn = document.querySelector('#login');
let registerBtn = document.querySelector('#register');
let welcomeUserP = document.querySelector('.email');
let viewsSection = document.querySelector('#views');

let userHasLoggedIn = false;

viewsSection.appendChild(logoutBtn);
viewsSection.appendChild(loginBtn);
viewsSection.appendChild(welcomeUserP);


registerBtn.addEventListener('click', showRegisterPage);
document.querySelector('#register-view #register').addEventListener('submit', registerFunction);
document.querySelector('#login-view #login').addEventListener('submit', loginFunction);
loginBtn.addEventListener('click', showLoginPage);
logoutBtn.addEventListener('click', logoutFunction);
homeBtn.addEventListener('click', showHomePage);


function showRegisterPage(e) {
    let highlightedBtn = Array.from(nav.children).filter(btn => btn.classList.contains('active'))[0];
    let registerSection = document.querySelector('#register-view');
    main.appendChild(registerSection);
    highlightedBtn.classList.remove('active');
    e.target.classList.add('active');
}

function showLoginPage(e) {
    let highlightedBtn = Array.from(nav.children).filter(btn => btn.classList.contains('active'))[0];
    let loginSection = document.querySelector('#login-view');
    main.appendChild(loginSection);
    highlightedBtn.classList.remove('active');
    e.target.classList.add('active');
}

function showHomePage(e) {
    let highlightedBtn = Array.from(nav.children).filter(btn => btn.classList.contains('active'))[0];

    Array.from(main.children).forEach(el => {
        viewsSection.appendChild(el);
    });

    if (userHasLoggedIn) {
        let userHomePage = document.querySelector('#home-view');
        main.appendChild(userHomePage);
    }

    if (highlightedBtn !== undefined) {
        highlightedBtn.classList.remove('active');
    }

    homeBtn.classList.add('active');
}

function registerFunction(e) {
    e.preventDefault();
    let registerFormData = new FormData(e.currentTarget);
    let repeatPass = registerFormData.get('rePass');

    let data = {
        email: registerFormData.get('email'),
        password: registerFormData.get('password'),
    };

    let wrongInput = Object.values(data).filter(el => el === '');

    if (wrongInput.length > 0) {
        throwError();
        return;
    }

    if (data.password !== repeatPass) {
        throwError(data.password);
        return;
    }

    fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(userObj => {
            if (userObj.code === 403) {
                throw new Error(userObj.message);
            }

            localStorage.setItem('token', userObj.accessToken);
            nav.appendChild(loginBtn);
            showHomePage();
        })
        .catch(err => console.log(err));

    e.currentTarget.reset();
}

function loginFunction(e) {
    e.preventDefault();
    let loginFormData = new FormData(e.currentTarget);

    let data = {
        email: loginFormData.get('email'),
        password: loginFormData.get('password'),
    };

    let wrongInput = Object.values(data).filter(el => el === '');

    if (wrongInput.length > 0) {
        throwError();
        return;
    }

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(userObj => {
            if (userObj.code === 403) {
                throw new Error(userObj.message);
            }

            localStorage.setItem('token', userObj.accessToken);
            viewsSection.appendChild(registerBtn);
            viewsSection.appendChild(loginBtn);

            nav.appendChild(logoutBtn);
            welcomeUserP.querySelector('span').textContent = userObj.email;
            nav.appendChild(welcomeUserP);
            userHasLoggedIn = true;
            showHomePage();
        })
        .catch(err => {
            throwError(err);
            return;
        });

    e.currentTarget.reset();
}

function logoutFunction() {
    fetch('http://localhost:3030//users/logout', {
        method: 'GET',
        headers: {
            'token': localStorage.getItem('token')
        }
    })
        .then(res => console.log(res));

    viewsSection.appendChild(welcomeUserP);
    viewsSection.appendChild(logoutBtn);

    nav.appendChild(registerBtn);
    nav.appendChild(loginBtn);


    userHasLoggedIn = false;
    showHomePage();
}

function throwError(err) {
    Array.from(main.querySelectorAll('.error')).forEach(el => el.remove());

    let errorMess = document.createElement('p');
    errorMess.classList.add('error');
    errorMess.style.color = 'red';

    if (err) {
        if (typeof err === 'object') {
            errorMess.textContent = err.message;
        } else {
            errorMess.textContent = 'Error: Passwords do not match';
        }

        main.appendChild(errorMess);
        return;
    }

    errorMess.textContent = 'Error';
    main.appendChild(errorMess);
}