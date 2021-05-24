function solve(text) {
    let arr = text.split('\\');
    let fileAndExtension = arr[arr.length - 1];
    let tokens = fileAndExtension.split('.');

    console.log(`File name: ${tokens[0]}`);
    console.log(`File extension: ${tokens[tokens.length - 1]}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')