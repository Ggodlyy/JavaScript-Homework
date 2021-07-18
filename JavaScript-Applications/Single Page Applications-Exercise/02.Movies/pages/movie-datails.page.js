let main = null;
let section = null;

export function setupMovieDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showMovieDetails() {
    main.innerHTML = '';
    main.appendChild(section);
}