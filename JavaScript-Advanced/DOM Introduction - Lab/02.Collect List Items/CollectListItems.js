function extractText() {
    let liElements = document.querySelector('#items').children;
    let output = document.querySelector('#result');

    Array.from(liElements).forEach((li, i) => i === 0 ? output.textContent += li.textContent : output.textContent += `\n${li.textContent}`);
}