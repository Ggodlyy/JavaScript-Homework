function solve(nums, toDo) {
    let takenNums = nums.splice(0, toDo[0]);
    takenNums.splice(0, toDo[1]);
    let occurances = takenNums.filter(el => el === toDo[2]);

    return `Number ${toDo[2]} occurs ${occurances.length} times.`;
}

console.log(solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
))
