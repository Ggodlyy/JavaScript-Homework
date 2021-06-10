function getArticleGenerator(articles) {
    let output = document.querySelector('#content');

    return function () {
        if (articles.length > 0) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            output.appendChild(article);
        }
    }
}
