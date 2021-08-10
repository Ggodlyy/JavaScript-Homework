import { userTemplate } from "./profileTemplate.js";

let _route = undefined;
let _renderHandler = undefined;
let _memeService = undefined;

function initialize(route, renderHandler, memeService) {
    _route = route;
    _renderHandler = renderHandler;
    _memeService = memeService;
}

async function getView(ctx) {
    let user = ctx.user;
    let memes = await _memeService.getUserMemes(user._id);

    let userModel = {
        user,
        memes,
    };

    let templateResult = userTemplate(userModel);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}