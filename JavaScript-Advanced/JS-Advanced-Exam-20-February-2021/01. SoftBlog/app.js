function solve() {
   document.querySelector('.create').addEventListener('click', appendArticle);

   function appendArticle(e) {
      e.preventDefault();

      let authourInput = document.querySelector('input[id="creator"]');
      let titleInput = document.querySelector('input[id="title"]');
      let categoryInput = document.querySelector('input[id="category"]');
      let contentInput = document.querySelector('textarea[id="content"]');
      let output = document.querySelector('.site-content > main > section');

      if (authourInput.value !== '' &&
         titleInput.value !== '' &&
         categoryInput.value !== '' &&
         contentInput.value !== '') {

         let article = createArticle(authourInput.value,
            titleInput.value, categoryInput.value, contentInput.value);
         output.appendChild(article);

         authourInput.value = '';
         titleInput.value = '';
         categoryInput.value = '';
         contentInput.value = '';
      }
   }

   function createArticle(author, title, category, content) {
      // Creating needed elements
      let article = document.createElement('article');
      let titleEl = document.createElement('h1');
      let categoryOuterEl = document.createElement('p');
      let categoryInnerTextEl = document.createElement('strong');
      let creatorOuterEl = document.createElement('p');
      let creatorInnerTextEl = document.createElement('strong');
      let contentEl = document.createElement('p');
      let buttonWrapperEl = document.createElement('div');
      let deleteBtnEl = document.createElement('button');
      let archiveBtnEL = document.createElement('button');

      // Add value / info in recently created elements
      titleEl.textContent = title;
      categoryOuterEl.textContent = 'Category:'
      categoryInnerTextEl.textContent = category;
      creatorOuterEl.textContent = 'Creator:'
      creatorInnerTextEl.textContent = author;
      contentEl.textContent = content;
      buttonWrapperEl.classList.add('buttons');
      deleteBtnEl.textContent = 'Delete';
      deleteBtnEl.classList.add('btn', 'delete');
      deleteBtnEl.addEventListener('click', deleteArticle);
      archiveBtnEL.textContent = 'Archive';
      archiveBtnEL.classList.add('btn', 'archive');
      archiveBtnEL.addEventListener('click', archiveArticle);

      // append elements to needed elements
      buttonWrapperEl.appendChild(deleteBtnEl);
      buttonWrapperEl.appendChild(archiveBtnEL);
      categoryOuterEl.appendChild(categoryInnerTextEl);
      creatorOuterEl.appendChild(creatorInnerTextEl);

      // append elements to article
      article.appendChild(titleEl);
      article.appendChild(categoryOuterEl);
      article.appendChild(creatorOuterEl);
      article.appendChild(contentEl);
      article.appendChild(buttonWrapperEl);

      return article;
   }

   function deleteArticle(e) {
      let article = e.currentTarget.parentElement.parentElement;
      article.remove();
   }

   function archiveArticle(e) {
      let article = e.currentTarget.parentElement.parentElement;
      let articleTitleEl = article.querySelector('h1');
      let olEl = document.querySelector('.archive-section ol');
      let liEl = document.createElement('li');
      liEl.textContent = articleTitleEl.textContent;

      // append li to ol
      olEl.appendChild(liEl);
      article.remove();

      // sort if more than 1 li
      let lists = Array.from(olEl.children);
      if (lists.length > 1) {
         let sortedList = lists
            .slice()
            .sort((a, b) => a.textContent.localeCompare(b.textContent));

         lists.forEach(li => li.remove());
         sortedList.forEach(li => olEl.appendChild(li));
      }
   }
}
