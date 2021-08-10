import { render } from '../node_modules/lit-html/lit-html.js';
import matchesTemplate from './templates/matchesTemplate.js';
import allTownsTemplate from './templates/townTemplate.js';
import { towns } from './towns.js';

let townOuput = document.querySelector('#towns');

render(allTownsTemplate(towns), townOuput);

document.querySelector('button').addEventListener('click', search);


function search(e) {
   let input = document.querySelector('#searchText');
   let output = document.querySelector('#result');

   let towns = Array.from(townOuput.querySelectorAll('ul li'));

   towns.forEach(li => li.classList.contains('active') ? li.classList.remove('active') : null);
   let foundTowns = towns.filter(li => li.textContent.toLowerCase().includes(input.value.toLowerCase()));

   if (input.value === '') {
      foundTowns.length = 0;
   }

   foundTowns.forEach(li => li.classList.add('active'));
   render(matchesTemplate(foundTowns.length), output);

   input.value = '';
}
