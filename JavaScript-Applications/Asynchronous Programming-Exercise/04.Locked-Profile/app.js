function lockedProfile() {
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            Object.keys(data).forEach((key, i) => {
                let profile = createProfile(data[key], (i + 1));
                document.querySelector('#main').appendChild(profile);
            });

            function createProfile(obj, i) {
                let profileDiv = document.createElement('div');
                profileDiv.classList.add('profile');

                let imgEl = document.createElement('img');
                imgEl.classList.add('userIcon');
                imgEl.src = './iconProfile2.png';

                let lockLabel = document.createElement('label');
                lockLabel.textContent = 'Lock';

                let lockInput = document.createElement('input');
                lockInput.setAttribute('type', 'radio');
                lockInput.setAttribute('name', `user${i}Locked`);
                lockInput.setAttribute('value', 'lock');
                lockInput.checked = true;

                let unlockLabel = document.createElement('label');
                unlockLabel.textContent = 'Unlock';

                let unlockInput = document.createElement('input');
                unlockInput.setAttribute('type', 'radio');
                unlockInput.setAttribute('name', `user${i}Locked`);
                unlockInput.setAttribute('value', 'unlock');

                let breakEl = document.createElement('br');
                let hrElement = document.createElement('hr');

                let usernameLabel = document.createElement('label');
                usernameLabel.textContent = 'Username';

                let usernameInput = document.createElement('input');
                usernameInput.setAttribute('type', 'text');
                usernameInput.setAttribute('name', `user${i}Username`);
                usernameInput.setAttribute('value', `${obj.username}`);
                usernameInput.disabled = true;
                usernameInput.readOnly = true;

                let hiddenDiv = document.createElement('div');
                hiddenDiv.setAttribute('id', `user${i}HiddenFields`);

                let secondHrElement = document.createElement('hr');

                let emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email:';

                let emailInput = document.createElement('input');
                emailInput.setAttribute('type', 'email');
                emailInput.setAttribute('name', `user${i}Email`);
                emailInput.setAttribute('value', `${obj.email}`);
                emailInput.disabled = true;
                emailInput.readOnly = true;

                let ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';

                let ageInput = document.createElement('input');
                ageInput.setAttribute('type', 'email');
                ageInput.setAttribute('name', `user${i}Age`);
                ageInput.setAttribute('value', `${obj.age}`);
                ageInput.disabled = true;
                ageInput.readOnly = true;

                let showMoreBtn = document.createElement('button');
                showMoreBtn.textContent = 'Show more';
                showMoreBtn.addEventListener('click', showFunction);

                function showFunction(e) {
                    let profileEl = e.target.parentElement;
                    let hiddenDivEl = e.target.previousElementSibling;
                    let lockCheck = profileEl.querySelector('input[value="lock"]');

                    if (lockCheck.checked) {
                        return;
                    }

                    if (hiddenDivEl.style.display === 'none' || hiddenDivEl.style.display === '') {
                        hiddenDivEl.style.display = 'block';
                    } else {
                        hiddenDivEl.style.display = 'none';
                    }

                    if (e.target.textContent === 'Show more') {
                        e.target.textContent = 'Hide it';
                    } else {
                        e.target.textContent = 'Show more';
                    }

                }

                hiddenDiv.appendChild(secondHrElement);
                hiddenDiv.appendChild(emailLabel);
                hiddenDiv.appendChild(emailInput);
                hiddenDiv.appendChild(ageLabel);
                hiddenDiv.appendChild(ageInput);

                profileDiv.appendChild(imgEl);
                profileDiv.appendChild(lockLabel);
                profileDiv.appendChild(lockInput);
                profileDiv.appendChild(unlockLabel);
                profileDiv.appendChild(unlockInput);
                profileDiv.appendChild(breakEl);
                profileDiv.appendChild(hrElement);
                profileDiv.appendChild(usernameLabel);
                profileDiv.appendChild(usernameInput);
                profileDiv.appendChild(hiddenDiv);
                profileDiv.appendChild(showMoreBtn);

                return profileDiv;
            }
        });
}