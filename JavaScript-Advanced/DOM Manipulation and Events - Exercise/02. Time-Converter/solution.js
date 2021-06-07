function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');

    Array.from(buttons).forEach(btn => {
        btn.addEventListener('click', convertTime);
    });

    function convertTime(e) {
        let input = e.target.previousElementSibling;
        let inputName = input.previousElementSibling.textContent;
        inputName = inputName.substring(0, inputName.length - 2);
        let days = document.querySelector('#days');
        let hours = document.querySelector('#hours');
        let minutes = document.querySelector('#minutes');
        let seconds = document.querySelector('#seconds');
        let value = Number(input.value);
        let daysConversion = {
            'Days': () => value,
            'Hours': () => value / 24,
            'Minutes': () => value / 1440,
            'Seconds': () => value / 86400
        };

        let daysValue = daysConversion[inputName]();
        days.value = daysValue;
        hours.value = daysValue * 24;
        minutes.value = daysValue * 1440;
        seconds.value = daysValue * 86400;
    }
}