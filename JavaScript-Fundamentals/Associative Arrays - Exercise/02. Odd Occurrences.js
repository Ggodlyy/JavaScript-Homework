function solve(string) {
    let arr = string.split(' ');
    let obj = {};

    arr.forEach(w => {
        if (isNaN(w)) {
            w = w.toLowerCase();
        }

        if (obj.hasOwnProperty(w)) {
            obj[w]++;
        } else {
            obj[w] = 1;
        }
    });

    let result = [];

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            result.push(key);
        }
    }

    return result.join(' ');
}

console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))
