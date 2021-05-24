function solve(text) {
    let textArr = text.split('');
    let result = [];

    for (let i = 0; i < textArr.length; i++) {
        let letter = textArr[i];

        if (letter === letter.toUpperCase()) {
            let word = letter;
            for (let j = i + 1; j < textArr.length; j++) {
                let nextLetter = textArr[j];
                if (nextLetter === nextLetter.toUpperCase()) {
                    break;
                }

                word += nextLetter;
            }

            result.push(word);
        }
    }

    return result.join(', ');
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')