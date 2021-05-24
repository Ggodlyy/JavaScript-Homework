function solve(text) {
    let textArr = text.split('');

    for (let i = 0; i < textArr.length; i++) {
        let char = textArr[i];

        if (char === '0') {
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

function otherSolution(text) {
    let output = text[0];

    for (let i = 1; i < text.length; i++) {
        if (text[i] !== text[i - 1]) {
            output += text[i];
        }
    }

    console.log(output);
}

solve('qqqwerqwecccwd')
otherSolution('aaaaabbbbbcdddeeeedssaa');