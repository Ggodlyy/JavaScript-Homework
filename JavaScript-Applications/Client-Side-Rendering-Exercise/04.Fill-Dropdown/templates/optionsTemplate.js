import { html } from '../../node_modules/lit-html/lit-html.js';

let optionTemplate = (o) => html`<option .value=${o._id}>${o.text}</option>`;

let allOptionTemplate = (options) => html`
${options.map(o => optionTemplate(o))}
`;

export default allOptionTemplate;