function solve(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        console.log(speeding(speed, speedLimits[area]));
    }

    function speeding(speed, limit) {
        let speedDiffrence = Math.abs(speed - limit);
        let status = '';

        if (speedDiffrence <= 20) {
            status = 'speeding';
        } else if (speedDiffrence <= 40) {
            status = 'excessive speeding';
        } else if (speedDiffrence > 40) {
            status = 'reckless driving';
        }

        return `The speed is ${speedDiffrence} km/h faster than the allowed speed of ${limit} - ${status}`
    }
}
solve(200, 'motorway')