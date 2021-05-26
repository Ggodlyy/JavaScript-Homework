function solve(arr) {
    let fieldSize = arr.shift();
    let ladyBugIndexes = arr.shift();
    let ladyBugIndexesArr = ladyBugIndexes.split(' ');
    let field = [];
    field.length = fieldSize;
    field.fill(0);

    for (let index of ladyBugIndexesArr) {
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }


    for (let input of arr) {
        let [startIndex, direction, flyLength] = input.split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (field[startIndex] !== 1 || startIndex < 0 || startIndex >= field.length) {
            continue;
        }

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);

            if (direction === 'right') {
                direction = 'left';
            } else {
                direction = 'right';
            }
        }

        switch (direction) {
            case 'right': flyRight(startIndex, flyLength); break;
            case 'left': flyLeft(startIndex, flyLength); break;
        }
    }

    console.log(field.join(' '));

    function flyRight(start, flyLength) {
        field[start] = 0;

        for (let i = start + flyLength; i < field.length; i++) {
            let cell = Number(field[i]);

            if (cell) {
                i += flyLength - 1
            } else {
                field[i] = 1;
                break;
            }
        }
    }

    function flyLeft(start, flyLength) {
        field[start] = 0;

        for (let i = start - flyLength; i >= 0; i--) {
            let cell = Number(field[i]);

            if (cell) {
                i -= flyLength;
                i++;
            } else {
                field[i] = 1;
                break;
            }
        }
    }
}
solve([5, '3',
    '3 left 2',
    '1 left -2']

)
