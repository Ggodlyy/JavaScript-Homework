function solve(first, second, third) {
    let sum = first.length + second.length + third.length;
    let avgLength = Math.floor(sum / arguments.length);

    console.log(sum);
    console.log(avgLength);
}
solve('chocolate', 'ice cream', 'cake');