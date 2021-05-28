function solve(arr, startString, endString) {
   let startIndex = arr.indexOf(startString);
   let endIndex = arr.indexOf(endString);

   return arr.slice(startIndex, endIndex + 1);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))
