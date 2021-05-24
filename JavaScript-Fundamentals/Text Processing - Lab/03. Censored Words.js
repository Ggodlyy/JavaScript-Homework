function solve(text, word) {
    let pattern = RegExp(word, 'g');
    let result = text.replace(pattern, '*'.repeat(word.length));
    return result;
}

function otherSolve(text, word) {
    let censored = text.replace(word, '*'.repeat(word.length));

    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }

    console.log(censored);
}

solve('A small sentence with some words', 'small');
otherSolve('A small sentence with some words', 'small');