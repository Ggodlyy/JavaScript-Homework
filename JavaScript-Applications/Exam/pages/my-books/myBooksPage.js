import { myBooksTemplate } from "./myBooksTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _bookService = undefined;

function initialize(router, renderHandler, bookService) {
    _router = router;
    _renderHandler = renderHandler;
    _bookService = bookService;
}

async function getView(ctx) {
    let id = ctx.user._id;
    let books = await _bookService.getUserBooks(id);
    let templateResult = myBooksTemplate(books);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}