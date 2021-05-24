function solve(word, text) {
    let pattern = RegExp(word, 'g');

    while (text.includes(word)) {
        text = text.replace(pattern, '');
    }

    console.log(text);
}
solve('ice', 'kicegiciceeb')