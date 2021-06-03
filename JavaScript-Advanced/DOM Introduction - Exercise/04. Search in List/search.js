function search() {
   let list = document.querySelectorAll('li');
   let searchValue = document.querySelector('#searchText').value;
   let output = document.querySelector('#result');

   let result = Array.from(list).filter(el => {
      if (el.textContent.includes(searchValue)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         return el;
      }
   });

   output.textContent = `${result.length} matches found`;
}
