function solve(arr) {
    let register = {};

    for (let input of arr) {
        let [systemName, component, subComponent] = input.split(' | ');

        if (register.hasOwnProperty(systemName)) {
            if (register[systemName].hasOwnProperty(component)) {
                register[systemName][component].push(subComponent);
            } else {
                register[systemName][component] = [subComponent];
            }
        } else {
            register[systemName] = { [component]: [subComponent] };
        }
    }


    let matrix = Object.entries(register);

    matrix.sort((a, b) => a[0].localeCompare(b[0]));
    matrix.sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);
    matrix.forEach(arr => {
        console.log(arr[0]);
        Object.entries(arr[1]).sort((a, b) => b[1].length - a[1].length)
            .forEach(arr => {
                console.log(`|||${arr[0]}`);
                arr[1].forEach(s => console.log(`||||||${s}`));
            });
    });
}
solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])