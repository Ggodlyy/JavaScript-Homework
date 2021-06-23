function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let baseString = super.toString();
            baseString += `\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                baseString += '\nComments:';
                this.comments.forEach(c => baseString += `\n * ${c}`);
            }

            return baseString;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let baseString = super.toString();
            baseString += `\nViews: ${this.views}`;

            return baseString;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}


const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// let test = new classes.BlogPost('mytest', 'myTestContent', 1);
// test.view().view().view();
// console.log(test.toString());
