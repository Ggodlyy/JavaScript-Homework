import newTopicForm from "./new-topic-form.js";


document.querySelector('#new-topic-form .public').addEventListener('click', newTopicForm.createNewTopic);
document.querySelector('#new-topic-form .cancel').addEventListener('click', newTopicForm.clearForm);