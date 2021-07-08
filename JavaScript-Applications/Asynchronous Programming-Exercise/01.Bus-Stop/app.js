function getInfo() {
    let input = document.querySelector('#stopId');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${input.value}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let busNameOutput = document.querySelector('#stopName');
            let busStopUl = document.querySelector('#buses');
            Array.from(busStopUl.querySelectorAll('li')).forEach(li => li.remove());

            busNameOutput.textContent = data.name;
            Object.keys(data.buses).forEach(busId => {
                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busStopUl.appendChild(li);
            });
        })
        .catch(err => {
            let busNameOutput = document.querySelector('#stopName');
            let busStopUl = document.querySelector('#buses');
            Array.from(busStopUl.querySelectorAll('li')).forEach(li => li.remove());

            busNameOutput.textContent = 'Error';
        });
}