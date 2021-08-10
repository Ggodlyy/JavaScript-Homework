import { createTemplate } from "./createTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _memeService = undefined;
let _form = undefined;

function initialize(router, renderHandler, memeService) {
    _router = router;
    _renderHandler = renderHandler;
    _memeService = memeService;
}

async function submitHandler(e) {
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
            let templateResult = createTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }
    
    
        let createdMeme = await _memeService.create(meme);
        _router.redirect('/all-memes');
    } catch(err) {
        alert(err);
    }
}

async function getView(ctx) {
    _form = {
        submitHandler,
        errorMessages: [],
    };
    let templateResult = createTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}