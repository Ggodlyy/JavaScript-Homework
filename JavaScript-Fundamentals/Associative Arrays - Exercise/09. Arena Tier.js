function solve(arr) {
    let gladiators = {};

    for (let input of arr) {
        if (input.includes('->')) {
            addGladiator(input);
        } else if (input.includes('vs')) {
            fight(input);
        } else {
            sortAndPrint();
        }
    }

    function addGladiator(input) {
        let [name, technique, skillDmg] = input.split(' -> ');
        skillDmg = Number(skillDmg);

        if (!gladiators.hasOwnProperty(name)) {
            gladiators[name] = {};
        }

        if (!gladiators[name].hasOwnProperty(technique)) {
            gladiators[name][technique] = skillDmg;
        }

        gladiators[name][technique] < skillDmg ? gladiators[name][technique] = skillDmg : null;
    }

    function fight(input) {
        let [firstGladiator, secondGladiator] = input.split(' vs ');

        if (gladiators[firstGladiator] !== undefined && gladiators[secondGladiator] !== undefined) {
            let firstGladTechniques = Object.keys(gladiators[firstGladiator]);
            let secondGladTechniques = Object.keys(gladiators[secondGladiator]);


            for (let technique of secondGladTechniques) {
                if (firstGladTechniques.includes(technique)) {
                    let firstGladSkillDmg = gladiators[firstGladiator][technique];
                    let secondGladSkillDmg = gladiators[secondGladiator][technique];

                    if (firstGladSkillDmg > secondGladSkillDmg) {
                        delete gladiators[secondGladiator];
                        break;
                    } else if (firstGladSkillDmg < secondGladSkillDmg) {
                        delete gladiators[firstGladiator];
                        break;
                    }
                }
            }


        }
    }

    function sortAndPrint() {
        for (let key in gladiators) {
            let totalSkill = Object.values(gladiators[key]).reduce((a, c) => a += c, 0);
            gladiators[key].totalSkill = totalSkill;
        }

        let nameSort = Object.entries(gladiators).sort((a, b) => a[0].localeCompare(b[0]));
        let skillSort = nameSort.sort((a, b) => b[1].totalSkill - a[1].totalSkill);

        for (let matrix of skillSort) {
            console.log(`${matrix[0]}: ${matrix[1].totalSkill} skill`);

            let skillNameSort = Object.entries(matrix[1]).sort((a, b) => a[0].localeCompare(b[0]));
            let skillDmgSort = skillNameSort.sort((a, b) => b[1] - a[1]);


            skillDmgSort.forEach(kvp => {
                if (kvp[0] !== 'totalSkill') {
                    console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
                }
            });
        }
    }
}
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]

)