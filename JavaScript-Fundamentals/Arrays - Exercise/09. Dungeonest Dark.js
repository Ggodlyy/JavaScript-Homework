function solve(arr) {
    let rooms = arr[0].split('|');
    let hp = 100;
    let totalCoins = 0;
    let aliveStatus = true;
    let floorCount = 0;

    for (let room of rooms) {
        let [encounter, value] = room.split(' ');
        floorCount++;

        switch (encounter) {
            case 'potion': potionFunction(Number(value)); break;
            case 'chest': chestFunction(Number(value)); break;
            default: battleFunction(encounter, Number(value)); break;
        }

        if (!aliveStatus) {
            console.log(`Best room: ${floorCount}`);
            break;
        }
    }

    if (aliveStatus) {
        console.log("You've made it!");
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${hp}`);     
    }

    function potionFunction(heal) {
        if (heal + hp > 100) {
            heal = 100 - hp;
            hp = 100;

        } else {
            hp += heal;
        }

        console.log(`You healed for ${heal} hp.`);
        console.log(`Current health: ${hp} hp.`);
    }

    function chestFunction(coins) {
        totalCoins += coins;
        console.log(`You found ${coins} coins.`);
    }

    function battleFunction(monster, damage) {
        hp -= damage;

        if (hp <= 0) {
            aliveStatus = false;
            console.log(`You died! Killed by ${monster}.`);
        } else {
            console.log(`You slayed ${monster}.`);
        }
    }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])