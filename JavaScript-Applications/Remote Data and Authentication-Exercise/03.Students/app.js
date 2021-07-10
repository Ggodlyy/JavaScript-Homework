let form = document.querySelector('#form');

form.addEventListener('submit', submitStudent);

function submitStudent(e) {
    e.preventDefault();

    let url = 'http://localhost:3030/jsonstore/collections/students';
    let formData = new FormData(e.currentTarget);

    let postStudent = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            facultyNumber: formData.get('facultyNumber'),
            grade: formData.get('grade')
        })
    })

    let getStudents = fetch(url);

    Promise.all([postStudent, getStudents])
        .then((res) => res[1].json())
        .then(data => {
            let output = document.querySelector('#results tbody');
            Array.from(output.children).forEach(tr => tr.remove());

            Object.values(data).forEach(obj => {
                let studentInfo = createStudentInfo(obj.firstName, obj.lastName, obj.facultyNumber, obj.grade);
                output.appendChild(studentInfo);
            })
        })
        .catch(err => console.log(err));

    function createStudentInfo(firstName, lastName, faculityNumber, grade) {
        let tr = document.createElement('tr');

        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstName;

        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastName;

        let faculityNumberTd = document.createElement('td');
        faculityNumberTd.textContent = faculityNumber;

        let gradeTd = document.createElement('td');
        gradeTd.textContent = grade;

        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(faculityNumberTd);
        tr.appendChild(gradeTd);

        return tr;
    }

    e.currentTarget.reset();
}