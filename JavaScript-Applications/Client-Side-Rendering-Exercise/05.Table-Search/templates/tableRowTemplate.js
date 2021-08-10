import { html } from '../../node_modules/lit-html/lit-html.js';


let trTemplate = (data) => html`
<tr>
    <td>${data.fullName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
</tr>
`;

let allTrTemplate = (students) => html`
${students.map(s => trTemplate(s))}
`;

export default allTrTemplate;