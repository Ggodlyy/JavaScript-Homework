function solve() {
  let sections = Array.from(document.querySelectorAll('#quizzie > section'));
  let answers = {
    validAnswers: ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'],
    myCorrectAnswers: [],
  }

  sections.forEach(section => section.addEventListener('click', answerQusetion));

  function answerQusetion(e) {
    let el = e.target;
    let section = e.currentTarget;
    let nextSection = section.nextElementSibling;

    if (el.classList[0] === 'answer-text' || el.classList[0] === 'answer-wrap') {
      if (answers.validAnswers.includes(el.textContent)) {
        answers.myCorrectAnswers.push(el.textContent);
      }

      section.style.display = 'none';

      if (nextSection) {
        nextSection.style.display = 'block';

        if (nextSection.hasAttribute('id')) {
          let resultOutput = nextSection.querySelector('li.results-inner > h1');
          let result = '';

          if (answers.myCorrectAnswers.length === 3) {
            result = 'You are recognized as top JavaScript fan!';
          } else {
            result = `You have ${answers.myCorrectAnswers.length} right answers`;
          }

          resultOutput.textContent = result;
        }
      }
    }
  }
}
