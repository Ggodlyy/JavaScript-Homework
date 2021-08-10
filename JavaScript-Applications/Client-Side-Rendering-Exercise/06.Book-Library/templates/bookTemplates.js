import { html } from '../../node_modules/lit-html/lit-html.js';
import { ifDefined } from '../../node_modules/lit-html/directives/if-defined.js';
import { tableTemplate } from './tableTemplate.js';

export let formTemplate = (form) => html`
<form class=${ifDefined(form.class)} id="${form.id}">
    ${form.type === 'edit' ? html`<input type="hidden" name="id">` : ''}
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value=${form.submitText}>
</form>
`;

export let allFormTemplate = (forms) => html`
${forms.map(f => formTemplate(f))}
`;

export let bookTemplate = (book) => html`
<tr class="book" data-id=${book._id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </td>
</tr>
`;

export let bookLibraryTemplate = (books, forms, loadBooksHandler) => html`
<button id="loadBooks" @click=${loadBooksHandler}>LOAD ALL BOOKS</button>
${tableTemplate(books)}
${allFormTemplate(forms)}
`;

export let allBooksTemplate = (books) => html`
${books.map(b => bookTemplate(b))}
`;