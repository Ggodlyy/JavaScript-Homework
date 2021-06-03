function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.querySelector('#searchField');

   function onClick(e) {
      let searchValue = searchField.value;
      let trows = document.querySelector('tbody').children;
      Array.from(trows).forEach(tr => {
         Array.from(tr.children).forEach(td => {
            if (td.textContent.includes(searchValue)) {
               tr.setAttribute('class', 'select');
            }
         });
      });

      searchField.value = '';
   }
}