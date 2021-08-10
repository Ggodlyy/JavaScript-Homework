import { render } from '../node_modules/lit-html/lit-html.js';
import allTownsTemplate from './templates/townTemplate.js';
document.querySelector('form').addEventListener('submit', addTowns);

function addTowns(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let towns = formData.get('towns');
    let townsArr = towns.trim().split(',');
    let output = document.querySelector('#root');

    let townsTemplateResult = allTownsTemplate(townsArr);
    render(townsTemplateResult, output);
    e.target.reset();
}