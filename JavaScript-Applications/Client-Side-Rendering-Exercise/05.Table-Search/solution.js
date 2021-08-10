import { render } from '../node_modules/lit-html/lit-html.js';
import allTrTemplate from './templates/tableRowTemplate.js';

document.querySelector('#searchBtn').addEventListener('click', onClick);
let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
let responseData = await response.json();
let data = Object.values(responseData).map(obj => ({
   fullName: `${obj.firstName} ${obj.lastName}`,
   email: obj.email,
   course: obj.course
}))

console.log(data);

let tbody = document.querySelector('tbody');

render(allTrTemplate(data), tbody);



function onClick(e) {
   let input = document.querySelector('#searchField');
   let allTableData = Array.from(tbody.querySelectorAll('tr td'));
   allTableData.forEach(td => td.parentElement.classList.contains('select') ? td.parentElement.classList.remove('select') : null);
   
   if (input.value === '') {
      return;
   }

   let allMatchData = allTableData
      .filter(td => td.textContent.toLowerCase().includes(input.value.toLowerCase()));


   allMatchData.forEach(td => td.parentElement.classList.add('select'));

   input.value = '';
}