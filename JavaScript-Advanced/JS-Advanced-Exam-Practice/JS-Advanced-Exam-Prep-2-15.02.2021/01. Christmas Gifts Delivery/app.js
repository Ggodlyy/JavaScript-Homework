function solution() {
    let mainEL = document.querySelector('.container');
    let addGiftBtn = mainEL.children[0].querySelector('div button');

    addGiftBtn.addEventListener('click', addGift);

    function addGift(e) {
        let input = document.querySelector('input[placeholder="Gift name"]');
        let output = mainEL.children[1].querySelector('ul');

        let giftLiEl = createGiftEl(input.value);
        output.appendChild(giftLiEl);

        if (output.children.length > 1) {
            let giftLists = Array.from(output.children);

            let sortedGiftLists = giftLists
                .slice()
                .sort((a, b) => a.textContent.localeCompare(b.textContent));

            giftLists.forEach(g => g.remove());
            sortedGiftLists.forEach(g => output.appendChild(g));
        }

        input.value = '';
    }

    function createGiftEl(giftName) {
        //  Create elements
        let li = document.createElement('li');
        let sendBtn = document.createElement('button');
        let discardBtn = document.createElement('button');

        // Add info to elements
        li.classList.add('gift');
        li.textContent = giftName;
        sendBtn.textContent = 'Send';
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.addEventListener('click', sendGift);
        discardBtn.textContent = 'Discard';
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.addEventListener('click', discardGift);

        // append elements
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        return li;
    }

    function sendGift(e) {
        let output = mainEL.children[2].querySelector('ul');
        let originalLi = e.target.parentElement;
        Array.from(originalLi.children).forEach(b => b.remove());

        output.appendChild(originalLi);
    }

    function discardGift(e) {
        let output = mainEL.children[3].querySelector('ul');
        let originalLi = e.target.parentElement;
        Array.from(originalLi.children).forEach(b => b.remove());

        output.appendChild(originalLi);
    }
}


