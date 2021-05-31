function solve(arr) {
    let input = arr.shift().split(' ');
    let words = {};
    input.forEach(w => words[w] = 0);

    for (let word of arr) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    let result = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let arr of result) {
        console.log(`${arr[0]} - ${arr[1]}`);
    }
}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)