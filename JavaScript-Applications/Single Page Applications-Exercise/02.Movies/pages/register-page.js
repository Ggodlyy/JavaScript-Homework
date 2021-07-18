let main = null;
let section = null;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}