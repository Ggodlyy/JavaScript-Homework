import { dashboardTemplate } from "./dashboardTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _bookService = undefined;

function initialize(router, renderHandler, bookService) {
    _router = router;
    _renderHandler = renderHandler;
    _bookService = bookService;
}

async function getView(ctx) {
    let books = await _bookService.getBooks();
    let templateResult = dashboardTemplate(books);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}