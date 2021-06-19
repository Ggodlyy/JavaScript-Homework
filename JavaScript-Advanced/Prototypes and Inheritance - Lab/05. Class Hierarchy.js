function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {

        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        changeParam(param) {
            let obj = {
                m: () => param /= 10,
                mm: () => param *= 10,
                cm: () => param,
            };

            return obj[this.units]();
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;

        }

        get area() {
            return Math.PI * this.radius * this.radius;
        };

        get radius() {
            return super.changeParam(this._radius);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }


    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            // we use private prop and getters to get and change value by unit input;
            this._width = width;
            this._height = height;
        }

        get area() {
            // in runtime this.width and this.height are invoket by getter same for to string method
            return this.width * this.height;
        }

        get width() {
            return super.changeParam(this._width);
        }

        get height() {
            return super.changeParam(this._height);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    }
}

let objWithClasses = solve();

let c = new objWithClasses.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new objWithClasses.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
