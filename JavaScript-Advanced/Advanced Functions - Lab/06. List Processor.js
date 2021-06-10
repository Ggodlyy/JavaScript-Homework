function solve(arr) {
    let result = [];

    for (let input of arr) {
        let [command, string] = input.split(' ');

        switch (command) {
            case 'add': add(string); break;
            case 'remove': remove(string); break;
            case 'print': print(); break;
        }
    }

    function add(string) {
        result.push(string);
    }

    function remove(string) {
        result = result.filter(el => el !== string);
    }

    function print() {
        console.log(result.join(','));
    }
}