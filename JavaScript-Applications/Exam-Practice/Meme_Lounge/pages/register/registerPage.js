import { registerTemplate } from "./registerTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _form = undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function submitHandler(e) {
    e.preventDefault();

    try {
        let formData = new FormData(e.target);
        _form.errorMessages = [];

        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPass');
        let gender = formData.get('gender');

        if (username.trim() === '') {
            _form.errorMessages.push('Username is required');
        }

        if (email.trim() === '') {
            _form.errorMessages.push('Email is required');
        }

        if (password.trim() === '') {
            _form.errorMessages.push('password is required');
        }

        if (repeatPass.trim() === '') {
            _form.errorMessages.push('Repeat password is required');
        }

        if (gender.trim() === '') {
            _form.errorMessages.push('gender is required');
        }

        if (_form.errorMessages.length > 0) {
            let templateResult = registerTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }


        let user = {
            username,
            email,
            password,
            gender
        };

        let registerResult = await _authService.register(user);
        _router.redirect('/all-memes');
    } catch (err) {
        alert(err);
    }
}

async function getView(context) {
    _form = {
        submitHandler,
        errorMessages: [],
    };

    let templateResult = registerTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}