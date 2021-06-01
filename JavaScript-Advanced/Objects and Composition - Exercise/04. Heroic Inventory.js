function solve(arr) {
    let heroes = [];

    for (let input of arr) {
        let [name, level, items] = input.split(' / ');
        level = Number(level);
        items = items !== undefined ? items.split(', ') : [];
        heroes.push({
            name,
            level,
            items
        });
    }

    return JSON.stringify(heroes);
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)