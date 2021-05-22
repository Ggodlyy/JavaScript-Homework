function solve(word, char, secondWord) {
    if (word.includes('_')) {
        word = word.replace('_', char);
    }

    if (word === secondWord) {
        return 'Matched';
    } else {
        return 'Not Matched';
    }
}
solve('Str_ng', 'I', 'Strong')