import { render } from '../node_modules/lit-html/lit-html.js';
import booksService from './services/booksService.js';
import { allFormTemplate, bookLibraryTemplate } from './templates/bookTemplates.js';

let body = document.querySelector('body');

let addForm = {
    id: 'add-form',
    type: 'add',
    title: 'Add Book',
    submitText: 'Submit',
};

let editFrom = {
    id: 'edit-form',
    type: 'edit',
    title: 'Edit Book',
    submitText: 'Save',
    class: 'hidden',
};

let forms = [addForm, editFrom];

render(bookLibraryTemplate([], forms, loadBooks), body);

async function loadBooks() {
    let booksContainer = document.querySelector('books-container');
    let booksObj = await booksService.getAllBooks();
    let books = Object.entries(booksObj).map(([key, val]) => {
        val._id = key;
        return val;
    });


    render(bookLibraryTemplate(books), booksContainer);
}