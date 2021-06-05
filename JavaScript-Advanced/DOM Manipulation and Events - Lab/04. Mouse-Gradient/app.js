function attachGradientEvents() {
    let gradientEL = document.querySelector('#gradient');
    let output = document.querySelector('#result');

    gradientEL.addEventListener('mousemove', gradientMove);
    gradientEL.addEventListener('mouseout', gradientOut);

    function gradientMove(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        output.textContent = power + "%";
    }

    function gradientOut(e) {
        output.textContent = '';
    }
}