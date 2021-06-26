function solve() {
    document.querySelector('form  button').addEventListener('click', addLecture);

    function addLecture(e) {
        e.preventDefault();
        let lectureNameInput = document.querySelector('input[name="lecture-name"]');
        let dateInput = document.querySelector('input[type="datetime-local"]');
        let moduleOption = document.querySelector('select[name="lecture-module"]');

        if (lectureNameInput.value !== '' &&
            dateInput.value !== '' &&
            moduleOption.value !== 'Select module') {
            // Create Elements
            let output = document.querySelector('.modules');
            let divModule = document.createElement('div');
            divModule.classList.add('module');
            let h3ModuleEl = document.createElement('h3');
            h3ModuleEl.textContent = `${moduleOption.value}-MODULE`;
            let ulEl = document.createElement('ul');
            let liEl = document.createElement('li');
            liEl.classList.add('flex');
            let h4DateModuleEl = document.createElement('h4');
            h4DateModuleEl.textContent = `${lectureNameInput.value} - ${dateInput.value}`;
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Del';
            deleteBtn.addEventListener('click', deleteModule);

            // Append structure
            liEl.appendChild(h4DateModuleEl);
            liEl.appendChild(deleteBtn);
            ulEl.appendChild(liEl);
            divModule.appendChild(h3ModuleEl);
            divModule.appendChild(ulEl);

            // check for same modules and append to output

            if (output.children.length > 0) {
                output.appendChild(divModule);
                let modules = output.children;
                let pattern = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T(?<hour>\d+):(?<minutes>\d+)/;


                let sortedModules = Array.from(modules).sort((a, b) => {
                    let aMatch = a.querySelector('li > h4').textContent.match(pattern);
                    let bMatch = b.querySelector('li > h4').textContent.match(pattern);

                    if (Number(aMatch.groups.day) < Number(bMatch.groups.day) ||
                        Number(aMatch.groups.month) < Number(bMatch.groups.month) ||
                        Number(aMatch.groups.year) < Number(bMatch.groups.year) ||
                        Number(aMatch.groups.hour) < Number(bMatch.groups.hour) ||
                        Number(aMatch.groups.minutes) < Number(bMatch.groups.minutes)) {
                        return a - b;
                    } else {
                        return b - a;
                    }
                });

                Array.from(output.children).forEach(div => div.remove());
                output.appendChild(sortedModules);
            } else {
                output.appendChild(divModule);
            }
        }
    }

    function deleteModule(e) {

    }
};