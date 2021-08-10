import memeService from "../../services/memeService.js";
import { allMemesTemplate } from "./allMemesTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _memeService = undefined;

function initialize(router, renderHandler, memeService) {
    _router = router;
    _renderHandler = renderHandler;
    _memeService = memeService;
}

async function getView(context) {
    let memes = await _memeService.getMemes();
    let homeTeplateResult = allMemesTemplate(memes);
    _renderHandler(homeTeplateResult);
}

export default {
    getView,
    initialize,
}