function solve(text) {
    let pattern = /#[A-Za-z]+\b/g;
    let matches = text.match(pattern);   
    matches.forEach(w => w = w.slice(1));
    console.log(matches);
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');