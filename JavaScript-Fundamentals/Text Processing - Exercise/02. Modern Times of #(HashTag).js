function solve(text) {
    let pattern = /#[A-Za-z]+\b/g;
    let matches = text.match(pattern);   
    let result = [];
    
    for (let input of matches) {
        result.push(input.slice(1));
    }

    return result.join('\n');
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');