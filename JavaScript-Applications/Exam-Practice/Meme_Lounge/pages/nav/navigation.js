import { navTemplate } from "./navTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function logoutHandler() {
    await _authService.logout();
    _router('/home');
}

async function getView(ctx, next) {
    let user = ctx.user;
    let email = user !== undefined ? user.email : undefined;
    
    let navModel = {
        isLoggedIn: user,
        email,
        logoutHandler
    };


    let templateResult = navTemplate(navModel);
    _renderHandler(templateResult);
    next();
}

export default {
    getView,
    initialize,
}