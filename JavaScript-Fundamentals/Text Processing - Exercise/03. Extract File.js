function solve(string) {
    let startIndex = string.lastIndexOf("\\") + 1;
    let endIndex = string.lastIndexOf('.');
    let name = string.substring(startIndex, endIndex);
    let extension = string.substring(endIndex + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')