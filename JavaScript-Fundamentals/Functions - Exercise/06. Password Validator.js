function solve(password) {
    let errors = [];
    let lengthValidation = function () {
        if (!(password.length >= 6 && password.length <= 10)) {
            errors.push('Password must be between 6 and 10 characters');
        }
    };

    let symbolValidation = function (password) {
        let pattern = /[^A-Za-z0-9]+/g
        let result = pattern.test(password);

        if (result) {
            errors.push('Password must consist only of letters and digits');
        }
    };

    let digitValidation = function (password) {
        let pattern = /\d+/g;
        let digits = password.match(pattern);

        if (digits !== null) {
            digits = digits.join('');

            if (!(digits.length >= 2)) {
                errors.push('Password must have at least 2 digits');
                return;
            }
        } else {
            errors.push('Password must have at least 2 digits');
            return;
        }

    }

    lengthValidation(password);
    symbolValidation(password);
    digitValidation(password);

    if (errors.length > 0) {
        return errors.join('\n');
    } else {
        return 'Password is valid';
    }
}



solve('MyPass123')
