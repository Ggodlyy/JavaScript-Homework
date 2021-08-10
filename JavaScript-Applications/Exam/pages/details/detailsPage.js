import { detailsTemplate } from './detailsTemplate.js';

let _router = undefined;
let _renderHandler = undefined;
let _bookService = undefined;

function initialize(router, renderHandler, bookService) {
    _router = router;
    _renderHandler = renderHandler;
    _bookService = bookService;
}

async function deleteHandler(id, e) {
    try {
        let confirmation = confirm('are you sure you want to delete this ?');
        if (confirmation) {
            await _bookService.deleteItem(id);
            _router.redirect('/dashboard');
        } else {
            _router.redirect(`${id}`);
        }
    } catch (err) {
        alert(err);
        _router.redirect('/dashboard');
    }
}

async function getView(ctx) {
    let user = ctx.user;
    let id = ctx.params.id;
    let book = await _bookService.get(id);
    let isOwner = false;


    if (user !== undefined && user._id === book._ownerId) {
        isOwner = true;
    }

    let model = {
        book,
        deleteHandler,
        isOwner,
        user,
    };

    let templateResult = detailsTemplate(model);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}