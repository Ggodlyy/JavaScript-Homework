import { html } from '../../node_modules/lit-html/lit-html.js';
import { allBooksTemplate, bookTemplate } from './bookTemplates.js';

export let tableTemplate = (books) => html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="books-contaier">
            ${allBooksTemplate(books)}
        </tbody>
    </table>
`;