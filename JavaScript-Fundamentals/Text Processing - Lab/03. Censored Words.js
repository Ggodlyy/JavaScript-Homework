function solve(text, word) {
    let pattern = RegExp(word, 'g');
    let result = text.replace(pattern, '*'.repeat(word.length));
    return result;
}
solve('A small sentence with some words', 'small');