function validate() {
    let usernameInput = document.querySelector('#username');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirm-password');
    let companyInput = document.querySelector('#company');
    let companyNumberInput = document.querySelector('#companyNumber');
    let submitBtn = document.querySelector('#submit');


    submitBtn.addEventListener('click', validateInputs);
    companyInput.addEventListener('change', isCompanyCheck);

    function validateInputs(e) {
        e.preventDefault();
        usernameValidator();
        emailValidator();
        passwordValidator();
        confirmPasswordValidator();
        companyNumberValidator();
        validFields();
    }

    function usernameValidator() {
        let username = usernameInput.value;
        let pattern = /^[A-Za-z0-9]{3,20}$/;

        if (pattern.test(username)) {
            if (usernameInput.hasAttribute('style')) {
                usernameInput.setAttribute('style', 'border:none');
            }
        } else {
            usernameInput.setAttribute('style', 'border-color:red');
        }
    }

    function emailValidator() {
        let email = emailInput.value;
        let pattern = /^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z0-9_]+$/;

        if (pattern.test(email)) {
            if (emailInput.hasAttribute('style')) {
                emailInput.setAttribute('style', 'border:none');
            }
        } else {
            emailInput.setAttribute('style', 'border-color:red');
        }
    }

    function passwordValidator() {
        let password = passwordInput.value;
        let pattern = /^[A-Za-z0-9_]{5,15}$/;

        if (pattern.test(password)) {
            if (passwordInput.hasAttribute('style')) {
                passwordInput.setAttribute('style', 'border:none');
            }
        } else {
            passwordInput.setAttribute('style', 'border-color:red');
        }
    }

    function confirmPasswordValidator() {
        let confirmPassword = confirmPasswordInput.value;
        let originalPassword = document.querySelector('#password').value;
        let pattern = /^[A-Za-z0-9_]{5,15}$/;

        if (confirmPassword === originalPassword && pattern.test(confirmPassword)) {
            if (confirmPasswordInput.hasAttribute('style')) {
                confirmPasswordInput.setAttribute('style', 'border:none');
            }
        } else {
            confirmPasswordInput.setAttribute('style', 'border-color:red');
        }
    }

    function isCompanyCheck() {
        let companyInfo = document.querySelector('#companyInfo');

        if (companyInput.checked === true) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function companyNumberValidator() {
        let companyNumber = companyNumberInput.value;

        if (companyInput.checked === true) {
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                if (companyNumberInput.hasAttribute('style')) {
                    companyNumberInput.setAttribute('style', 'border:none');
                }
            } else {
                companyNumberInput.setAttribute('style', 'border-color:red');
            }
        }
    }

    function validFields() {
        let validDiv = document.querySelector('#valid');

        if (companyInput.checked !== true) {
            if (usernameInput.style.border === 'none' &&
                emailInput.style.border === 'none' &&
                passwordInput.style.border === 'none' &&
                confirmPasswordInput.style.border === 'none') {
                validDiv.style.display = 'block';
                console.log('all are correct');
            } else {
                validDiv.style.display = 'none';
            }
        } else {
            if (usernameInput.style.border === 'none' &&
            emailInput.style.border === 'none' &&
            passwordInput.style.border === 'none' &&
            confirmPasswordInput.style.border === 'none' &&
            companyNumberInput.style.border === 'none') {
            validDiv.style.display = 'block';
            console.log('all are correct');
        } else {
            validDiv.style.display = 'none';
        }
        }
    }
}
