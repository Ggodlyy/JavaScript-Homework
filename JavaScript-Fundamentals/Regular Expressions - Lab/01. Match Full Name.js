function solve(arr) {
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
    let matches = arr[0].match(pattern);

    return matches.join(' ');
}
console.log(solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]));
