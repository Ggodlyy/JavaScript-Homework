function solution() {
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                let article = createArticle(obj);
                document.querySelector('#main').appendChild(article);
            });

            function createArticle(obj) {
                let mainDiv = document.createElement('div');
                mainDiv.classList.add('accordion');

                let headDiv = document.createElement('div');
                headDiv.classList.add('head');

                let titleSpan = document.createElement('span');
                titleSpan.textContent = obj.title;

                let moreBtn = document.createElement('button');
                moreBtn.classList.add('button');
                moreBtn.id = obj._id;
                moreBtn.textContent = 'More';
                moreBtn.addEventListener('click', showHiddenContent);

                function showHiddenContent(e) {
                    let currentId = e.target.getAttribute('id');
                    let currentArticle = e.target.parentElement.parentElement;
                    let currentExtraDiv = currentArticle.querySelector('.extra');
                    let currentExtraText = currentExtraDiv.querySelector('p');

                    if (e.target.textContent === 'More') {
                        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${currentId}`)
                            .then(res => res.json())
                            .then(extraContent => {
                                currentExtraText.textContent = extraContent.content;
                                e.target.textContent = 'Less';
                                currentExtraDiv.style.display = 'block';
                            });
                    } else {
                        currentExtraText.textContent = '';
                        e.target.textContent = 'More';
                        currentExtraDiv.style.display = 'none';
                    }
                }

                let extraDiv = document.createElement('div');
                extraDiv.classList.add('extra');

                let extraText = document.createElement('p');

                headDiv.appendChild(titleSpan);
                headDiv.appendChild(moreBtn);
                extraDiv.appendChild(extraText);
                mainDiv.appendChild(headDiv);
                mainDiv.appendChild(extraDiv);

                return mainDiv;
            }
        });
}
