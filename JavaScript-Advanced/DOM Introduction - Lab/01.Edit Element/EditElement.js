function editElement(el, match, replacer) {
    let pattern = RegExp(match, 'g');
    el.textContent = el.textContent.replace(pattern, replacer);
}