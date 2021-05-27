function solve(arr) {
    let gamesString = arr.shift();
    let library = gamesString.split(' ');
    let input = arr.shift();

    while (input !== 'Play!') {
        let [command, game] = input.split(' ');

        switch (command) {
            case 'Install': install(game); break;
            case 'Uninstall': unInstall(game); break;
            case 'Update': update(game); break;
            case 'Expansion': expansion(game); break;
        }

        input = arr.shift();
    }

    return library.join(' ');

    function install(game) {
        if (!library.includes(game)) {
            library.push(game);
        }
    }

    function unInstall(game) {
        if (library.includes(game)) {
            let index = library.indexOf(game);
            library.splice(index, 1);
        }
    }

    function update(game) {
        if (library.includes(game)) {
            let index = library.indexOf(game);
            let updatedGame = library.splice(index, 1);
            library.push(updatedGame[0]);
        }
    }

    function expansion(input) {
        let [game, expansion] = input.split('-');

        if (library.includes(game)) {
            let index = library.indexOf(game);
            let newExpansion = `${game}:${expansion}`;

            library.splice(index + 1, 0, newExpansion);
        }
    }
}

console.log(solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
));
