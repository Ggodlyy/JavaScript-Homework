function solve(string, start, count) {
    let result = string.substr(start, count);
    return result;
}

function otherSolve(string, start, count) {
    let result = string.substring(start, count + 1);
    return result;
}

solve("ASentance", 1, 8);
otherSolve("ASentance", 1, 8);