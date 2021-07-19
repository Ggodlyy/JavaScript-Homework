import { setupHome, showHome } from "./pages/home-page.js";
import { setupLogin, showLogin } from "./pages/login-page.js";
import { setupMovieDetails } from "./pages/movie-datails.page.js";
import { setupRegister, showRegister } from "./pages/register-page.js";
import { setupEdit } from './pages/edit.js';
import { setupCreate, showCreate } from './pages/create.js';

let main = document.querySelector('main');

let links = {
    home: showHome,
    register: showRegister,
    login: showLogin,
};

setupSection('home-page', setupHome);
setupSection('form-sign-up', setupRegister);
setupSection('form-login', setupLogin);
setupSection('movie-details', setupMovieDetails);
setupSection('edit-movie', setupEdit);
setupSection('add-movie', setupCreate);

setupNavigation();

showHome();


function setupSection(sectionId, setup) {
    let section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNavigation() {
    let nav = document.querySelector('nav');
    let email = sessionStorage.getItem('authToken');

    if (email !== null) {
        document.querySelector('#welcome').textContent = `Welcome, ${email}`;
        nav.querySelectorAll('.user').forEach(li => li.style.display = 'block');
        nav.querySelectorAll('.guest').forEach(li => li.style.display = 'none');
    } else {
        nav.querySelectorAll('.user').forEach(li => li.style.display = 'none');
        nav.querySelectorAll('.guest').forEach(li => li.style.display = 'block');
    }


    nav.addEventListener('click', (e) => {
        e.preventDefault();
        let view = links[e.target.id];

        if (typeof view === 'function') {
            view();
        }
    });

    document.querySelector('#create-movie').addEventListener('click', (e) => {
        e.preventDefault();
        showCreate();
    });
}