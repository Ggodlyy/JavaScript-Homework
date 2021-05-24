function solve(text) {
    let length = text.length;

    let firstHalf = text.slice(0, length / 2);
    let secondHalf = text.slice(text.length / 2,);

    let firstHalfResult = firstHalf
        .split('')
        .reverse()
        .join('');

    let secondHalfResult = secondHalf
        .split('')
        .reverse()
        .join('');

    console.log(firstHalfResult);
    console.log(secondHalfResult);
}

function otherSolution(text) {
    let length = text.length / 2;
    let textArr = text.split('');
    let firstHalf = '';
    let secondHalf = '';

    for (let i = length - 1; i >= 0; i--) {
        firstHalf += textArr[i];
    }

    for (let i = textArr.length - 1; i >= length; i--) {
        secondHalf += textArr[i];
    }

    console.log(firstHalf);
    console.log(secondHalf);
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
otherSolution('tluciffiDsIsihTgnizamAoSsIsihT')