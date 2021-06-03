function solve() {
   let bestRestaurantInfo = document.querySelector('#bestRestaurant p');
   let bestWorkersInfo = document.querySelector('#workers p');

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('textarea').value);
      let resaurantsInfo = {};

      input.forEach(text => {
         let [restaurantName, employeesInfo] = text.split(' - ');

         if (!resaurantsInfo.hasOwnProperty(restaurantName)) {
            resaurantsInfo[restaurantName] = [];
         }

         employeesInfo.split(', ').forEach(emplyeeInfo => {
            let [employeeName, salary] = emplyeeInfo.split(' ');
            let emplyeInfoObj = {
               name: employeeName,
               salary: Number(salary)
            };
            resaurantsInfo[restaurantName].push(emplyeInfoObj);
         });
      });

      let bestAvgSalary = 0;
      let bestRestaurant = '';

      for (let restaurant in resaurantsInfo) {
         let avgSalary = resaurantsInfo[restaurant].reduce((a, c) => a += c.salary, 0) / resaurantsInfo[restaurant].length;

         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRestaurant = restaurant;
         }
      }

      let result = resaurantsInfo[bestRestaurant].sort((a, b) => b.salary - a.salary);
      let workerOuput = '';
      result.forEach(obj => {
         workerOuput += `Name: ${obj.name} With Salary: ${obj.salary} `;
      });


      bestRestaurantInfo.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${(result[0].salary).toFixed(2)}`;
      bestWorkersInfo.textContent = workerOuput.trim();
   }
}