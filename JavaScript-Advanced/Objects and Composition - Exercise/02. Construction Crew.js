function solve(obj) {
    if (obj.dizziness) {
        let waterIntake = (0.1 * obj.weight) * obj.experience;
        obj.levelOfHydrated += waterIntake;
        obj.dizziness = false; 
    }

    return obj;
}
solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)