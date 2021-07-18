let main = null;
let section = null;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}