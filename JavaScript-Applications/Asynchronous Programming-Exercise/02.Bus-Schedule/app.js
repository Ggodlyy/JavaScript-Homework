function solve() {
    let currentBusStop = 'depot';
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

    let infoBox = document.querySelector('#info > .info');
    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');

    function depart() {
        fetch(baseUrl + currentBusStop)
            .then(res => res.json())
            .then(data => {
                infoBox.setAttribute('data-stop-name', data.name);
                infoBox.setAttribute('data-next-stop-name', data.next);
                infoBox.textContent = `Next stop ${data.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(err => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                infoBox.textContent = 'Error';
            });
    }

    function arrive() {
        let stopName = infoBox.getAttribute('data-stop-name');
        let nextStopName = infoBox.getAttribute('data-next-stop-name');

        infoBox.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        currentBusStop = nextStopName;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();