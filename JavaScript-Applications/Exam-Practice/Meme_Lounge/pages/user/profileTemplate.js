import {html} from '../../node_modules/lit-html/lit-html.js';


export let userTemplate = (userModel) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src=${
                userModel.user.gender === 'male' 
                ? '/images/male.png'
                : '/images/female.png'
            }>
            <div class="user-content">
                <p>Username: ${userModel.user.username}</p>
                <p>Email: ${userModel.user.email}</p>
                <p>My memes count: ${userModel.memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            ${userModel.memes.length > 0 
            ? userModel.memes.map(m => userMemeTemplate(m))
          :html`<p class="no-memes">No memes in database.</p>`}  
        </div>
    </section>
`;

let userMemeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
   </div>
`;