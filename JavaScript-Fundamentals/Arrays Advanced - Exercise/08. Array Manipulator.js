function solve(nums, commands) {
    for (let input of commands) {
        let tokens = input.split(' ');

        switch (tokens[0]) {
            case 'add': add(Number(tokens[1]), Number(tokens[2])); break;
            case 'addMany': addMany(tokens); break;
            case 'contains': contains(Number(tokens[1])); break;
            case 'remove': remove(Number(tokens[1])); break;
            case 'shift': shiftFunction(Number(tokens[1])); break;
            case 'sumPairs': sumPairs(); break;
            case 'print': return `[ ${nums.join(', ')} ]`;
        }
    }

    function add(index, el) {
        nums.splice(index, 0, el);
    }

    function addMany(tokens) {
        let index = Number(tokens[1]);
        let numsToAdd = tokens.slice(2).map(Number);
        nums.splice(index, 0, ...numsToAdd);
    }

    function contains(el) {
        console.log(nums.indexOf(el));
    }

    function remove(index) {
        if (nums[index] !== undefined) {
            nums.splice(index, 1);
        }
    }

    function shiftFunction(rotations) {
        while (rotations > 0) {
            let firstEl = nums.shift();
            nums.push(firstEl);

            rotations--;
        }
    }

    function sumPairs() {
        let result = [];

        for (let i = 0; i < nums.length; i += 2) {
            let firstEl = nums[i];
            let nextEl = nums[i + 1];

            if (nextEl === undefined) {
                nextEl = 0;
            }

            let sum = firstEl + nextEl;
            result.push(sum);
        }

        nums = result;
    }
}

console.log(solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

))
