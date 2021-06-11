function solve() {
    let nameInput = document.querySelector('input[placeholder="Name"]');
    let hallInput = document.querySelector('input[placeholder="Hall"]');
    let ticketPriceInput = document.querySelector('input[placeholder="Ticket Price"]');
    let onScreenBtn = document.querySelector('#container > button');
    let clearBtn = document.querySelector('#archive > button');

    onScreenBtn.addEventListener('click', addMovies);
    clearBtn.addEventListener('click', clearArchive);

    function addMovies(e) {
        e.preventDefault();
        let ticketPrice = Number(ticketPriceInput.value);
        let output = document.querySelector('#movies > ul');

        if (nameInput.value !== '' && hallInput.value !== '' && ticketPriceInput.value !== '') {
            if (!isNaN(ticketPrice)) {
                let li = document.createElement('li');
                let span = document.createElement('span');
                span.textContent = nameInput.value;
                let strong = document.createElement('strong');
                strong.textContent = `Hall: ${hallInput.value}`;
                let div = document.createElement('div');
                let strongInsideDiv = document.createElement('strong');
                strongInsideDiv.textContent = ticketPrice.toFixed(2);
                let inputEl = document.createElement('input');
                inputEl.setAttribute('placeholder', 'Tickets Sold');
                let archiveBtn = document.createElement('button');
                archiveBtn.textContent = 'Archive';
                archiveBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    let input = e.currentTarget.previousElementSibling;
                    let output = document.querySelector('#archive > ul');

                    if (!isNaN(input.value) && input.value !== '') {
                        let movieInfoList = e.currentTarget.parentElement.parentElement;
                        let movieName = movieInfoList.querySelector('span').textContent;
                        let moviePrice = Number(movieInfoList.querySelector('div > strong').textContent);
                        let total = moviePrice * input.value;

                        let li = document.createElement('li');
                        let span = document.createElement('span');
                        span.textContent = movieName;
                        let strong = document.createElement('strong');
                        strong.textContent = `Total amount: ${total.toFixed(2)}`;
                        let deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.addEventListener('click', (e) => {
                            let li = e.currentTarget.parentElement;
                            li.remove();
                        });

                        li.appendChild(span);
                        li.appendChild(strong);
                        li.appendChild(deleteBtn);
                        output.appendChild(li);
                        movieInfoList.remove();
                    }
                });

                div.appendChild(strongInsideDiv);
                div.appendChild(inputEl);
                div.appendChild(archiveBtn);

                li.appendChild(span);
                li.appendChild(strong);
                li.appendChild(div);
                output.appendChild(li);

                nameInput.value = '';
                hallInput.value = '';
                ticketPriceInput.value = '';
            }
        }
    }

    function clearArchive(e) {
        let lists = document.querySelector('#archive > ul').children;
        Array.from(lists).forEach(li => li.remove());
    }
}