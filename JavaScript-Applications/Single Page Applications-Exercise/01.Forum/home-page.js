let homeView = document.querySelector('#home-view');

async function showHomePage() {
    let main = document.querySelector('#main');
    Array.from(main.children).forEach(el => el.remove());
    main.appendChild(homeView);
}

export default showHomePage;