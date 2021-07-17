import newTopicForm from "./new-topic-form.js";


document.querySelector('#new-topic-form .public').addEventListener('click', newTopicForm.postNewTopic);
document.querySelector('#new-topic-form .cancel').addEventListener('click', newTopicForm.clearForm);