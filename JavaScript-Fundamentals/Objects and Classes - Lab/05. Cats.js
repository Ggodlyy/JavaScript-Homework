function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let input of arr) {
        let [name, age] = input.split(' ');
        let cat = new Cat(name, Number(age));
        cats.push(cat);
    }

    cats.forEach(obj => obj.meow());
}
solve(['Mellow 2', 'Tom 5'])