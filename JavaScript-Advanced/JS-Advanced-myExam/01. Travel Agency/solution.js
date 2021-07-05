window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.querySelector('#submitBTN');
  submitBtn.addEventListener('click', submitPersonalInfo);

  function submitPersonalInfo(e) {
    // maybe add preventDefault if it doesn't work
    let fullNameInput = document.querySelector('#fname');
    let emailInput = document.querySelector('#email');
    let phoneNumberInput = document.querySelector('#phone');
    let addressInput = document.querySelector('#address');
    let postalCodeInput = document.querySelector('#code');

    if (fullNameInput.value !== '' && emailInput.value !== '') {
      let ulOutput = document.querySelector('#infoPreview');
      let editBtn = document.querySelector('#editBTN');
      let continueBtn = document.querySelector('#continueBTN');

      //add event listeners for edit and continue buttons
      editBtn.addEventListener('click', editPersonalInfo);
      continueBtn.addEventListener('click', finishReservation);

      // create Li Elements for each input
      let fullNameLi = document.createElement('li');
      let emailLi = document.createElement('li');
      let phoneNumberLi = document.createElement('li');
      let addressLi = document.createElement('li');
      let postalCodeLi = document.createElement('li');

      // add info to each previously created Li element
      fullNameLi.textContent = `Full Name: ${fullNameInput.value}`;
      emailLi.textContent = `Email: ${emailInput.value}`;
      phoneNumberLi.textContent = `Phone Number: ${phoneNumberInput.value}`;
      addressLi.textContent = `Address: ${addressInput.value}`;
      postalCodeLi.textContent = `Postal Code: ${postalCodeInput.value}`;

      //append li elements to preview ul
      ulOutput.appendChild(fullNameLi);
      ulOutput.appendChild(emailLi);
      ulOutput.appendChild(phoneNumberLi);
      ulOutput.appendChild(addressLi);
      ulOutput.appendChild(postalCodeLi);

      // disable submit btn and enable edit and continue buttons
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      // clear inputs
      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumberInput.value = '';
      addressInput.value = '';
      postalCodeInput.value = '';
    }
  }

  function editPersonalInfo(e) {
    let ulPreview = document.querySelector('#infoPreview');
    let lists = ulPreview.children;
    let fullNameInput = document.querySelector('#fname');
    let emailInput = document.querySelector('#email');
    let phoneNumberInput = document.querySelector('#phone');
    let addressInput = document.querySelector('#address');
    let postalCodeInput = document.querySelector('#code');

    for (let i = 0; i < Array.from(lists).length; i++) {
      let currentLi = lists[i];
      let [detail, value] = currentLi.textContent.split(':');

      value = value.trim();

      switch (i) {
        case 0: fullNameInput.value = value; break;
        case 1: emailInput.value = value; break;
        case 2:
          if (value === '') {
            phoneNumberInput.value = value; 
            break;
          }
          phoneNumberInput.value = Number(value); break;
        case 3: addressInput.value = value; break;
        case 4:
          if (value === '') {
            postalCodeInput.value = value;
            break;
          }
          postalCodeInput.value = Number(value); break;
      }

    }

    // disable edit and continue buttons
    e.target.disabled = true;
    let continueBtn = document.querySelector('#continueBTN');
    continueBtn.disabled = true;

    // enable submit btn
    submitBtn.disabled = false;

    // remove previewLists
    Array.from(ulPreview.children).forEach(li => li.remove());
  }

  function finishReservation(e) {
    let blockEl = document.querySelector('#block');
    Array.from(blockEl.children).forEach(el => el.remove());

    let finalMessage = document.createElement('h3');
    finalMessage.textContent = 'Thank you for your reservation!';
    blockEl.appendChild(finalMessage);
  }

  throw new Runtime
}
