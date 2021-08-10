import page from './node_modules/page/page.mjs';
import allMemesPage from './pages/all-memes/allMemesPage.js';
import createPage from './pages/create/createPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import homePage from './pages/home/homePage.js';
import loginPage from './pages/login/loginPage.js';
import navigation from './pages/nav/navigation.js';
import registerPage from './pages/register/registerPage.js';
import profilePage from './pages/user/profilePage.js';
import litRender from './rendering/render.js';
import authService from './services/authService.js';
import memeService from './services/memeService.js';


let nav = document.querySelector('nav');
let main = document.querySelector('main');

let litRenderer = new litRender();

let navRender = litRenderer.createRenderHandler(nav);
let mainRender = litRenderer.createRenderHandler(main);

navigation.initialize(page, navRender, authService);
homePage.initialize(page, mainRender, authService);
loginPage.initialize(page, mainRender, authService);
registerPage.initialize(page, mainRender, authService);
allMemesPage.initialize(page, mainRender, memeService);
createPage.initialize(page, mainRender, memeService);
detailsPage.initialize(page, mainRender, memeService);
editPage.initialize(page, mainRender, memeService);
profilePage.initialize(page, mainRender, memeService);



page('index.html', '/home');
page('/', '/home');

page(decorateUser);
page(navigation.getView);

page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/all-memes', allMemesPage.getView);
page('/create', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/edit/:id', editPage.getView);
page('/profile', profilePage.getView);



page.start();

console.log(authService.getUser());

function decorateUser(ctx, next) {
    let user = authService.getUser();
    ctx.user = user;

    next();
}