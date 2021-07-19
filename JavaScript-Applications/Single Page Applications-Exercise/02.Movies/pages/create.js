import { showHome } from "./home-page.js";

async function addMovie(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let title = formData.get('title');
    let description = formData.get('description');
    let imgUrl = formData.get('imageUrl');

    let movieInfo = {
        title,
        description,
        imgUrl,
    };

    let validMovie = validateMovie(title, description, imgUrl);

    if (validMovie) {
        let token = sessionStorage.getItem('authToken');
        let response = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(movieInfo)
        });
    
        if (response.ok) {
            showHome();
        }
    }
}

function validateMovie(title, description, imgUrl) {
    if (title === '' || description === '' || imgUrl === '') {
        alert('Incorrect or empty inputs');
        return false;
    }
    
    return true
}

let main = null;
let section = null;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.addEventListener('submit', addMovie);
}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}