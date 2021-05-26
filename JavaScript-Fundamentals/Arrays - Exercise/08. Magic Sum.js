function solve(arr, magicNum) {
   for (let i = 0; i < arr.length; i++) {
       let el = arr[i];

       for (let j = i + 1; j < arr.length; j++) {
           let nextEl = arr[j];

           if (el + nextEl === magicNum) {
               console.log(`${el} ${nextEl}`);
           }
       }
   }
}
solve([14, 20, 60, 13, 7, 19, 8],
    27
    
)