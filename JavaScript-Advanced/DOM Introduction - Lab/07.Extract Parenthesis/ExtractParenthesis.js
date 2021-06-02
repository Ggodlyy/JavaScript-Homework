function extract(content) {
    let el = document.getElementById(content);
    let pattern = /\([\w ]+\)/g;
    let result = el.textContent.match(pattern);

    return result.join('; ');
}