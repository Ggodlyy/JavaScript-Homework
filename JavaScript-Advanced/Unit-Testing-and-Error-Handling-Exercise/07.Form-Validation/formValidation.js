function validate() {
    let companyInput = document.querySelector('#company');
    let submitBtn = document.querySelector('#submit');


    submitBtn.addEventListener('click', validateForm);
    companyInput.addEventListener('change', isCompanyCheck);

    function validateForm(e) {
        e.preventDefault();

        let usernameInput = document.querySelector('#username');
        let usernameRegexPattern = /^[A-Za-z0-9]{3,20}$/;
        let validUsername = usernameRegexPattern.test(usernameInput.value);
        setBorder(usernameInput, validUsername);
        let emailInput = document.querySelector('#email');
        let emailRegexPattern = /^.*@.*\..*$/;
        let validEmail = emailRegexPattern.test(emailInput.value);
        setBorder(emailInput, validEmail);
        let passwordInput = document.querySelector('#password');
        let passwordRegexPattern = /^\w{5,15}$/;
        let validPassword = passwordRegexPattern.test(passwordInput.value);
        let confirmPasswordInput = document.querySelector('#confirm-password');
        let bothPasswordsAreOk = validPassword && passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, bothPasswordsAreOk);
        setBorder(confirmPasswordInput, bothPasswordsAreOk);

        let companyNumberInput = document.querySelector('#companyNumber');
        let validCompanyNumber = false;
        if (companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
            let companyNumber = Number(companyNumberInput.value);
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                validCompanyNumber = true;
            }
        }
      
        setBorder(companyNumberInput, validCompanyNumber);

        let validDiv = document.querySelector('#valid');
        let mainValidInputs = validUsername && validEmail && validPassword && bothPasswordsAreOk;

        if (mainValidInputs) {
            validDiv.style.display = 'block';
            if (companyInput.checked) {
               if (!validCompanyNumber) {
                validDiv.style.display = 'none';
               }
            } 
        } else {
            validDiv.style.display = 'none';
        }
    }

    function isCompanyCheck(e) {
        let companyInfo = document.querySelector('#companyInfo');

        if (e.target.checked === true) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function setBorder(input, isValid) {
        if (isValid) {
            input.style.setProperty('border', 'none');
        } else {
            input.style.setProperty('border', '2px solid red');
        }
    }
}
