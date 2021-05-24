function otherSolve(text, word) {
    let arr = text.split(' ');
    let count = 0;

    for (let input of arr) {
        if (input === word) {
            count++;
        }
    }

    return count;
}

function moreSolve(text, word) {
    let arr = text.split(' ').filter((el) => el === word);
    return arr.length;
}

solve('This is a word and it also is a sentence', 'is');
otherSolve('This is a word and it also is a sentence', 'is');
moreSolve('This is a word and it also is a sentence', 'is');