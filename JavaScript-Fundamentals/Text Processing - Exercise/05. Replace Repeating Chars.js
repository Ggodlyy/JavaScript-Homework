function solve(text) {
    let textArr = text.split('');

    for (let i = 0; i < textArr.length; i++) {
        let char = textArr[i];

        if (char === 'O') {
            continue;
        }
        
        for (let j = i + 1; j < textArr.length; j++) {
            if (char === textArr[j]) {
                textArr[j] = '0';
            } else {
                break;
            }
        }
    }

    let result = textArr.filter(el => el != '0');
    return result.join('');
}
solve('qqqwerqwecccwd')