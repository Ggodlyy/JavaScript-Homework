import { html } from './../../node_modules/lit-html/lit-html.js';

let catCardTemplate = (cat, showStatus) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${showStatus}>Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;

let catsTemplate = (cats, showStatus) => html`
<ul>
    ${cats.map(c => catCardTemplate(c, showStatus))}
</ul>
`;

export default catsTemplate;