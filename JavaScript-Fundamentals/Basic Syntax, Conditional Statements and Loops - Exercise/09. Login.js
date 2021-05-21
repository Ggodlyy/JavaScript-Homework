function solve(arr) {
    let username = arr.shift();
    let password = username
        .split('')
        .reverse()
        .join('');

    let errors = [];

    for (let input of arr) {
        if (input === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            errors.push(input);
            if (errors.length === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}
solve(['Acer','login','go','let me in','recA']);