function solve(word, text) {
    word = word.toLowerCase();
    let textArr = text.split(' ');
    let result = textArr
        .map(el => el.toLowerCase())
        .filter(el => el === word);

    if (result.length > 0) {
        return result.join('');
    } else {
        return `${word} not found!`;
    }
}
solve('javascript',
    'JavaScript is the best programming language'
)