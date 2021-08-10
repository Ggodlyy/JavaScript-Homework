import { html } from '../../node_modules/lit-html/lit-html.js';

let townTemplate = (townName) => html`<li>${townName}</li>`;

let allTownsTemplate = (allTowns) => html`
    <ul>
        ${allTowns.map(t => townTemplate(t))}
    </ul>
`;

export default allTownsTemplate;