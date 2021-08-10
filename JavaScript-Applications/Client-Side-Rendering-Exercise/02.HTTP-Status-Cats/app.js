import { render } from '../node_modules/lit-html/lit-html.js';
import catsTemplate from './templates/cat-card-template.js';
import { cats } from './catSeeder.js';

let output = document.querySelector('#allCats');

function showStatus(e) {
    let btn = e.target;

    if (btn.textContent === 'Show status code') {
        btn.textContent = 'Hide status code';
        btn.nextElementSibling.style.display = 'block';
    } else {
        btn.textContent = 'Show status code';
        btn.nextElementSibling.style.display = 'none';
    }
}

render(catsTemplate(cats, showStatus), output)

