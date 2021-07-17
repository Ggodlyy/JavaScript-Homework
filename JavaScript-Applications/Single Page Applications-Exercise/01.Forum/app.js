import showHomePage from "./home-page.js";
import newTopicForm from "./new-topic-form.js";

document.querySelector('#home').addEventListener('click', showHomePage);
document.querySelector('#new-topic-form .public').addEventListener('click', newTopicForm.postNewTopic);
document.querySelector('#new-topic-form .cancel').addEventListener('click', newTopicForm.clearForm);





