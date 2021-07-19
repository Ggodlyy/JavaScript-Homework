async function getMovieById(id) {
    let response = await fetch('http://localhost:3030/data/movies/' + id);
    let data = await response.json();

    return data;
}

async function btnFunctions(e) {
    e.preventDefault();

    if (e.target.classList.contains('btn-danger')) {
         
    }

    if (e.target.classList.contains('btn-warning')) {
        console.log('clicked edit');
    }

    if (e.target.classList.contains('btn-primary')) {
        console.log('clicked like');
    }
}


function createMovieCard(movie) {
    let userId = sessionStorage.getItem('userId');
    let buttons = [];

    if (userId !== null) {
        if (userId === movie._ownerId) {
            buttons.push('<a class="btn btn-danger" href="#">Delete</a>');
            buttons.push('<a class="btn btn-warning" href="#">Edit</a>');
        } else {
            buttons.push('<a class="btn btn-primary" href="#">Like</a>');
        }
    }

    buttons.push('<span class="enrolled-span">Liked 1</span>');

    let el = document.createElement('div');
    el.classList.add('container');
    el.addEventListener('click', btnFunctions);
    el.innerHTML = `   <div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail"
            src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${buttons.join('')}
    </div>
</div>`

    return el;
}



let main = null;
let section = null;

export function setupMovieDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showMovieDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    let movie = await getMovieById(id);
    let card = createMovieCard(movie);
    section.appendChild(card);
}