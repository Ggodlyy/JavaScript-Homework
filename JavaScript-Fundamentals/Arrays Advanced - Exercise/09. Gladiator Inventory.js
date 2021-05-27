function solve(arr) {
    let inventory = arr.shift()
        .split(' ');

    for (let input of arr) {
        let [command, equipment] = input.split(' ');

        switch (command) {
            case 'Buy': buy(equipment); break;
            case 'Trash': trash(equipment); break;
            case 'Repair': repair(equipment); break;
            case 'Upgrade': upgrade(equipment); break;
        }
    }

    return inventory.join(' ');

    function buy(equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
    }

    function trash(equipment) {
        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
        }
    }

    function repair(equipment) {
        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            let repairedEquipment = inventory.splice(index, 1);
            inventory.push(repairedEquipment[0]);
        }
    }

    function upgrade(tool) {
         let [equipment, upg] = tool.split('-');
         let upgradedEquipment = `${equipment}:${upg}`;

         if (inventory.includes(equipment)) {
             let index = inventory.indexOf(equipment);
             inventory.splice(index + 1, 0, upgradedEquipment);
         }
    }
}

console.log(solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
))
