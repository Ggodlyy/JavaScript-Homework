function solve(steps, stepsLength, speed) {
    let length = steps * stepsLength;
    let totalRestInMinutes = Math.floor(length / 500);
    let totalTime = length / speed / 1000 * 60;
    let totalTimeInSec = Math.ceil((totalRestInMinutes + totalTime) * 60);
    let result = new Date(null, null, null, null, null, totalTimeInSec);
    console.log(result.toTimeString().split(' ')[0]);
}
solve(4000, 0.60, 5)