function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;


    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },

        set: function (newFullName) {
            let pattern = /(?<firstName>\w+) (?<lastName>\w+)/;
            let matchResult = newFullName.match(pattern);

            if (matchResult) {
                this.firstName = matchResult.groups.firstName;
                this.lastName = matchResult.groups.lastName;
            }
        }
    });
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
