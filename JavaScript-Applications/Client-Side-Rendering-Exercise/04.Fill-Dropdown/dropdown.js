import { render } from '../node_modules/lit-html/lit-html.js';
import allOptionTemplate from './templates/optionsTemplate.js';

let optionMenu = document.querySelector('#menu');
let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
let allOptions = [];


loadOptions();

async function loadOptions() {
    let optionResponse = await fetch(url);
    let optionData = await optionResponse.json();
    allOptions = Object.values(optionData);
    render(allOptionTemplate(allOptions), optionMenu);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let text = formData.get('itemText');

    let optionRequest = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    if (optionRequest.ok) {
        let optionData = await optionRequest.json();
        allOptions.push(optionData);
        render(allOptionTemplate(allOptions), optionMenu);
    }

    e.target.reset();
}