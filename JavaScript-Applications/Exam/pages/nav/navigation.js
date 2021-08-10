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
    _router.redirect('/dashboard');
}

async function getView(ctx, next) {
    let user = ctx.user;

    let navModel = {
        user,
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