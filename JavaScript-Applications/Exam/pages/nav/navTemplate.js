import { html } from '../../node_modules/lit-html/lit-html.js';


export let navTemplate = (navModel) => html`
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
        ${navModel.user 
        ? userTemplate(navModel)
        : guestTemplate()}
    </section>
`;


let userTemplate = (navModel) => html`
        <div id="user">
            <span>Welcome, ${navModel.user.email}</span>
            <a class="button" href="/my-books">My Books</a>
            <a class="button" href="/add-book">Add Book</a>
            <a class="button" href="javascript:void(0)" @click=${navModel.logoutHandler}>Logout</a>
        </div>
`;

let guestTemplate = () => html`
        <div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>
`;