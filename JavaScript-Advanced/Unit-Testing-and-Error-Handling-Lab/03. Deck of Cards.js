function printDeckOfCards(arr) {
    let deck = [];
    let invalid = false;

    for (let input of arr) {
        let obj = createCard(input);
        if (typeof obj === 'string') {
            invalid = true;
            console.log(obj);
        }

        deck.push(obj.toString());
    }

    function createCard(input) {
        let result = {};
        let pattern = /\b(?<face>\d+)(?<suit>[A-Z])\b/;
        let face = '';
        let suit = '';

        if (pattern.test(input)) {
            let exec = pattern.exec(input);
            face = exec.groups.face;
            suit = exec.groups.suit;
        } else {
            let tokens = input.split('');
            face = tokens[0];
            suit = tokens[1];
        }

        function faceValidation(face) {
            if (isNaN(face)) {
                if (face.toUpperCase() !== face) {
                    return false;
                }
            } else {
                face = face.toString();
            }

            let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

            if (validFaces.includes(face)) {
                return true;
            } else {
                return false;
            }
        }

        function suitValidation(suit) {
            let validSuits = ['S', 'H', 'D', 'C'];

            if (validSuits.includes(suit) && suit.toUpperCase() && suit) {
                return true;
            } else {
                return false;
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
        } else {
            return 'Invalid card: ' + face + suit;
        }

        return result
    }

    if (!invalid) {
        console.log(deck.join(' '));
    }
}

console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));




