import page from './node_modules/page/page.mjs';
import createPage from './pages/create/createPage.js';
import dashboardPage from './pages/dashboard/dashboardPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import loginPage from './pages/login/loginPage.js';
import myBooksPage from './pages/my-books/myBooksPage.js';
import navigation from './pages/nav/navigation.js';
import registerPage from './pages/register/registerPage.js';
import litRender from "./rendering/render.js";
import authService from './services/authService.js';
import bookService from './services/bookService.js';

let nav = document.querySelector('#site-header .navbar');
let main = document.querySelector('#site-content');

let litRenderer = new litRender();

let navRender = litRenderer.createRenderHandler(nav);
let mainRender = litRenderer.createRenderHandler(main);

dashboardPage.initialize(page, mainRender, bookService);
navigation.initialize(page, navRender, authService);
loginPage.initialize(page, mainRender, authService);
registerPage.initialize(page, mainRender, authService);
createPage.initialize(page, mainRender, bookService);
detailsPage.initialize(page, mainRender, bookService);
editPage.initialize(page, mainRender, bookService);
myBooksPage.initialize(page, mainRender, bookService);

page('/index.html', '/dashboard');
page('/', '/dashboard');

page(decorateContextWithUser);
page(navigation.getView);
page('/dashboard', dashboardPage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/add-book', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/edit/:id', editPage.getView);
page('/my-books', myBooksPage.getView);

page.start();

function decorateContextWithUser(ctx, next) {
    let user = authService.getUser();
    ctx.user = user;
    next();
}





