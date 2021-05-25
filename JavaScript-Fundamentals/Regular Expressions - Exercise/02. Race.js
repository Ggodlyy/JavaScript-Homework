function solve(arr) {
    let participants = arr.shift();
    let racers = {};
    let input = arr.shift();
    let pattern = /[A-Za-z]+/g;

    while (input !== 'end of race') {
        let racer = (input.match(pattern)).join('');
        let numbers = input.match(/\d/g);
        let score = numbers
            .map(Number)
            .reduce((acc, curr) => acc += curr, 0);

        if (participants.includes(racer)) {
            if (racers.hasOwnProperty(racer)) {
                racers[racer] += score;
            } else {
                racers[racer] = score;
            }
        }

        input = arr.shift();
    }

    let winners = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            console.log(`1st place: ${winners[i][0]}`);
        } else if (i === 1) {
            console.log(`2nd place: ${winners[i][0]}`);
        } else if (i === 2) {
            console.log(`3rd place: ${winners[i][0]}`);
        }
    }
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])