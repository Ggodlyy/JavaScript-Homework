function focused() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus", focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur", focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }

}

// function betterSolution() {
//     let firstDiv = document.querySelector('body > div');
//     firstDiv.addEventListener('focusin', changeBackground);
//     firstDiv.addEventListener('focusout', blurFunc);

//     function changeBackground(e) {
//         let divEl = e.target.parentElement;
//         divEl.classList.add('focused')
//     }

//     function blurFunc(e) {
//         let divEl = e.target.parentElement;
//         divEl.classList.remove('focused');
//     }
// }