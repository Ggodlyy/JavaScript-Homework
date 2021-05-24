function solve(text) {
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
    let matches = text.match(pattern);

    return matches.join(' ');
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")