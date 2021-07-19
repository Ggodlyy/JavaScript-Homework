import { showHome } from "./home-page.js";


async function registerUser(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPass = formData.get('repeatPassword');

    let validUser = validateUser(email, password, repeatPass);

    if (validUser) {
        let userInfo = {
            email,
            password,
        };

        let response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });

        if (response.ok) {
            let userData = await response.json();
            sessionStorage.setItem('authToken', userData.accessToken);
            sessionStorage.setItem('userId', userData._id);
            sessionStorage.setItem('email', userData.email);

            showHome();
        }
    }
}

function validateUser(username, pass, rePass) {
    if (username === '' || pass === '' || rePass === '') {
        alert('Incorrect or empty inputs');
        return false;
    }

    if (pass !== rePass) {
        alert('Passwords must match');
        return false;
    }

    return true
}



let main = null;
let section = null;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.addEventListener('submit', registerUser);
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}