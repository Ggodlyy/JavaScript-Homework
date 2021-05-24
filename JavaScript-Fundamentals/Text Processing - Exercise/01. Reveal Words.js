function solve(template, text) {
    let wordsArr = template.split(', ');
    let textArr = text.split(' ');

    while (wordsArr.length > 0) {
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].includes('*') && textArr[i].length === wordsArr[0].length) {
                textArr[i] = wordsArr[0];
                wordsArr.splice(0, 1);
            }
        }
    }

    console.log(textArr.join(' '));
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'

)