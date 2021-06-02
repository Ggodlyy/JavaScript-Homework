function showText() {
    let hiddentText = document.querySelector('#text');
    let link = document.querySelector('#more');

    if (hiddentText.hasAttribute('style')) {
        hiddentText.setAttribute('style', 'display:inline');
        link.setAttribute('style', 'display:none');
    }
}