import { showHome } from "./home-page.js";

async function userLog(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let userInfo = {
        email,
        password
    };

    let response = await fetch('http://localhost:3030/users/login', {
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

        document.querySelector('#welcome').textContent = `Welcome, ${email}`;
        document.querySelector('nav').querySelectorAll('.user').forEach(li => li.style.display = 'block');
        document.querySelector('nav').querySelectorAll('.guest').forEach(li => li.style.display = 'none');

        showHome();
    }
}

let main = null;
let section = null;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.addEventListener('submit', userLog)
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}