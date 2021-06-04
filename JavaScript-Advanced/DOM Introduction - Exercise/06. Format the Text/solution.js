function solve() {
  let inputText = document.getElementById('input').value;
  let outputElement = document.getElementById('output');

  let sentences = inputText
    .split('.')
    .filter(el => el !== '')
    .map(el => el.trim() + '.');

  let maxP = Math.ceil(sentences.length / 3);

  for (let i = 0; i < maxP; i++) {
    outputElement.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`
  }
}