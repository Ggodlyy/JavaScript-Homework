function solve(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    return person;
}
solve("Peter",
    "Pan",
    "20"
)