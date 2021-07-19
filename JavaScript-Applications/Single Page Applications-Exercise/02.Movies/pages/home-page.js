import { showMovieDetails } from "./movie-datails.page.js";

let main = null;
let section = null;
let container = null;

async function getMovies() {
    let res = await fetch('http://localhost:3030/data/movies');
    let data = res.json();

    return data;
}

function createMovieCard(movie) {
    let el = document.createElement('div');
    el.classList.add('card', 'mb-4');

    el.innerHTML = ` <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">  
        <button id="${movie._id}" type="button" class="btn btn-info movie-details-btn">Details</button>
</div>`

    return el;
}

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center');

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('movie-details-btn')) {
            showMovieDetails(e.target.id);
        }
    });
}

export async function showHome() {
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);

    let movies = await getMovies();
    let cards = movies.map(createMovieCard);

    let fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    container.innerHTML = '';
    container.appendChild(fragment);
}