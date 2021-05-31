function solve(arr) {
    let words = {};

    for (let word of arr) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    let result = Object.entries(words).sort((a, b) => b[1] - a[1]);
    for (let arr of result) {
        console.log(`${arr[0]} -> ${arr[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])