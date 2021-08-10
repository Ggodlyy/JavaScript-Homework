import { loginTemplate } from "./loginTemplate.js";

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

        let email = formData.get('email');
        let password = formData.get('password');

        if (email.trim() === '') {
            _form.errorMessages.push('Email is required');
        }

        if (password.trim() === '') {
            _form.errorMessages.push('password is required');
        }

        if (_form.errorMessages.length > 0) {
            let templateResult = loginTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }


        let user = {
            email,
            password,
        };

        await _authService.login(user);
        _router.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }
}

async function getView(ctx) {
    _form = {
        submitHandler,
        errorMessages: [],
    };

    let templateResult = loginTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize,
}