function solve(arr) {
    let result = {};

    for (let input of arr) {
        if (input.includes('inherit')) {
            inheritObj(input);
        } else if (input.includes('create')) {
            createObj(input);
        } else if (input.includes('set')) {
            setObjProp(input);
        } else if (input.includes('print')) {
            printObj(input);
        }

    }

    function createObj(input) {
        let [command, name] = input.split(' ');
        result[name] = {};
    }

    function inheritObj(input) {
        let [command, newObjName, secondComand, fromObjName] = input.split(' ');
        let newObj = Object.create(result[fromObjName]);
        result[newObjName] = newObj;
    }

    function setObjProp(input) {
        let [command, objName, prop, value] = input.split(' ');

        result[objName][prop] = value;
    }

    function printObj(input) {
        let [command, objName] = input.split(' ');

        let obj = result[objName];
        let output = [];

        for (let key in obj) {
            output.push(`${key}:${obj[key]}`);
        }

        console.log(output.join(', '));
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)