function solve() {
   //with array
   
   let addButtons = document.querySelectorAll('.add-product');
   let checkOutBtn = document.querySelector('.checkout');
   let textAreaEl = document.querySelector('textarea');
   let listOfProducts = [];
   let total = 0;

   Array.from(addButtons).forEach(btn => btn.addEventListener('click', addProduct));
   checkOutBtn.addEventListener('click', calculateTotalMoney);

   function addProduct(e) {
      let addProductDiv = e.target.parentElement;
      let product = addProductDiv.previousElementSibling.firstElementChild.textContent;
      let money = addProductDiv.nextElementSibling.textContent;

      if (!listOfProducts.includes(product)) {
         listOfProducts.push(product);
      }

      let result = `Added ${product} for ${money} to the cart.\n`
      textAreaEl.value += result;
      total += Number(money);
   }

   function calculateTotalMoney(e) {
      let allButtons = document.querySelectorAll('button');
      textAreaEl.value += `You bought ${listOfProducts.join(', ')} for ${total.toFixed(2)}.`;
      Array.from(allButtons).forEach(btn => btn.disabled = true);
   }
}

//with Object

// function solve() {
//    let addButtons = document.querySelectorAll('.add-product');
//    let checkOutBtn = document.querySelector('.checkout');
//    let textAreaEl = document.querySelector('textarea');
//    let listOfProducts = {};

//    Array.from(addButtons).forEach(btn => btn.addEventListener('click', addProduct));
//    checkOutBtn.addEventListener('click', calculateTotalMoney);

//    function addProduct(e) {
//       let addProductDiv = e.target.parentElement;
//       let product = addProductDiv.previousElementSibling.firstElementChild.textContent;
//       let money = addProductDiv.nextElementSibling.textContent;

//       if (!listOfProducts[product]) {
//          listOfProducts[product] = 0
//       }

//       listOfProducts[product] += Number(money);

//       let result = `Added ${product} for ${money} to the cart.\n`
//       textAreaEl.value += result;
//    }



//    function calculateTotalMoney(e) {
//       let total = Object.values(listOfProducts).reduce((a, c) => a += c, 0);
//       let allButtons = document.querySelectorAll('button');
//       textAreaEl.value += `You bought ${Object.keys(listOfProducts).join(', ')} for ${total.toFixed(2)}.`;
//       Array.from(allButtons).forEach(btn => btn.disabled = true);
//    }
// }