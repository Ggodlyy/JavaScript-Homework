function solve(arr) {
    let heroes = [];

    for (let input of arr) {
        let [name, level, items] = input.split(' / ');
        let heroObj = {};
        heroObj.name = name;
        heroObj.level = Number(level);
        heroObj.items = items.split(', ').sort((a, b) => a.localeCompare(b));
        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(obj => {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items.join(', ')}`);
    });
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)