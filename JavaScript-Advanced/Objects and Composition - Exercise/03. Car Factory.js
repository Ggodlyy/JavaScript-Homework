function solve(obj) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let car = { model: obj.model };

    for (let i = 0; i < engines.length; i++) {
        let engine = engines[i];
        if (obj.power <= engine.power) {
            car.engine = engines[i];
            break;
        }
    }

    car.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize--;
    }
    let wheels = [];
    wheels.length = 4;
    wheels.fill(obj.wheelsize);
    car.wheels = wheels;

    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))
