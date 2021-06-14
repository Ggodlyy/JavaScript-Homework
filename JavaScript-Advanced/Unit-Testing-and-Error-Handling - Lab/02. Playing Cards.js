function solve(face, suit) {
    let result = {};

    function faceValidation(face) {
        if (isNaN(face)) {
            if (face.toUpperCase() !== face) {
                throw new Error('Error');
            }
        } else {
            face = face.toString();
        }

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (validFaces.includes(face)) {
            return true;
        } else {
            throw new Error('Error');
        }
    }

    function suitValidation(suit) {
        let validSuits = ['S', 'H', 'D', 'C'];

        if (validSuits.includes(suit) && suit.toUpperCase() && suit) {
            return true;
        } else {
            throw new Error('Error');
        }
    }

    if (faceValidation(face) === true && suitValidation(suit) === true) {
        result.toString = function () {
            let icons = {
                S: '\u2660',
                H: '\u2665',
                D: '\u2666',
                C: '\u2663',
            };

            let result = face + icons[suit];
            return result;
        }
    }

    return result
}



let card = solve(2, 'S');
console.log(card.toString());