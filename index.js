/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

const positiveNumbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
const myProfileInfo = {
  firstName: "Leon",
  surName: "Kwizera",
  email: "leonmagnificat@gmail.com",
  age: "25",
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */

myProfileInfo.HasDrivingLicence = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */

delete myProfileInfo.age;
// console.log(myProfileInfo);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */

const secondProfileInfo = {
  firstName: "James",
  surName: "Brandon",
  email: "leonmagnificat@epicode.com",
  age: "28",
};

// console.log(myProfileInfo.email)
// console.log(secondProfileInfo.email)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
const shoppingCart = 80;
const shipping = 10;
const totalShoppingCart =
  shoppingCart > 50
    ? "Free Shipping You will pay" + " " + shoppingCart
    : "You will pay" + " " + parseInt(shoppingCart + shipping);
// console.log(totalShoppingCart);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

const shoppingCart = 20;
const shipping = 10;
const promotion = (shoppingCart * 20) / 100;
const netPay = shoppingCart - promotion;
const totalShoppingCart =
  shoppingCart > 50
    ? "Free Shipping You will pay" + " " + parseInt(netPay)
    : "You will pay" + " " + parseInt(netPay + shipping);
// console.log(totalShoppingCart);
// console.log(promotion);
// console.log(netPay);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

const car_1 = {
  brand: "KIA",
  model: "2022",
  PlateNumber: "NYC456",
};

const car_2 = Object.assign({}, car_1);
car_2.PlateNumber = "45454QWA";

const car_3 = Object.assign({}, car_1);
car_3.PlateNumber = "ACX";

const car_4 = Object.assign({}, car_1);
car_4.PlateNumber = "GAZ43";

const car_5 = Object.assign({}, car_1);
car_5.PlateNumber = "45A";

// console.log(car_1);
// console.log(car_2);
// console.log(car_3);
// console.log(car_4);
// console.log(car_5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

const carsForRent = [car_1, car_2, car_3, car_4, car_5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
const firstCarRemoved = carsForRent.shift();
const lastCarRemoved = carsForRent.pop();

// console.log(carsForRent);
// console.log(carsForRent.shift());
// console.log(carsForRent.pop());
// console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

const carsForSale = [];

const car_6 = Object.assign({}, car_1);
car_6.PlateNumber = "QWA...";

const car_7 = Object.assign({}, car_1);
car_7.PlateNumber = "45454++";

const car_8 = Object.assign({}, car_1);
car_8.PlateNumber = "4WA€€";

carsForSale = [car_6, car_7, car_8];

const totalCars = carsForSale.concat(carsForRent);

// console.log("total cars are:", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

for (x = 0; x < carsForRent.length; x++) {
  console.log("Car", x + 1, "information");
  const carzInfos = carsForRent[x];
  console.log(carzInfos.brand, carzInfos.model, carzInfos.PlateNumber);
}
