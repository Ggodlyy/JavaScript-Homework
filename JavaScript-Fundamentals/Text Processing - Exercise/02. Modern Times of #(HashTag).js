function solve(text) {
    let pattern = /#[A-Za-z]+\b/g;
    let matches = text.match(pattern);
    return matches.join('\n');
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');