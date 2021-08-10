import { editTemplate } from './editTemplate.js';

let _router = undefined;
let _renderHandler = undefined;
let _memeService = undefined;
let _form = undefined;

function initialize(router, renderHandler, memeService) {
    _router = router;
    _renderHandler = renderHandler;
    _memeService = memeService;
}

async function submitHandler(id, e) {
    console.log('clicked');
    e.preventDefault();

    try {
        let formData = new FormData(e.target);
        _form.errorMessages = [];

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        let meme = {
            title,
            description,
            imageUrl,
        };

        if (title.trim() === '') {
            _form.errorMessages.push('Title is required');
        }

        if (description.trim() === '') {
            _form.errorMessages.push('Description is required');
        }

        if (imageUrl.trim() === '') {
            _form.errorMessages.push('imageUrl is required');
        }

        if (_form.errorMessages.length > 0) {
            let templateResult = editTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }


        let updateMeme = await _memeService.update(meme, id);
        _router.redirect(`/details/${id}`);
    } catch (err) {
        alert(err);
    }
}

async function getView(ctx) {
    let id = ctx.params.id;
    let meme = await _memeService.get(id);
    console.log(meme);
    _form = {
        submitHandler,
        errorMessages: [],
        meme
    };
    let templateResult = editTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}