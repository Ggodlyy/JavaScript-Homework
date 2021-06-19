function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            super.toString = function () {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            }
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
            super.toString = function () {
                return `${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            }
        }
    }

    return {
        Person,
        Teacher,
        Student,
    };
}

let objOfClasses = solve();
let obj = new objOfClasses.Student('Pesho', 'nope', 'softuni');

console.log(obj.toString());
