/*
Instructions
Complete each of the following tasks by writing code to manipulate the provided
arrays. Your solution should only use the array iterator methods covered in the
lesson: (forEach(), map(), filter(), find(), findIndex(), some(), every(),
reduce()). Submit the final version of the arrays as specified after each task.
Instructions
*/
/*
Task 1: Using forEach()
1. Create an array of five of your favorite cities.
2. Use forEach( ) to log each city name to the console in uppercase.
3. Add comments to your code that show the expected output as it would be
formatted in the console.
*/
let favoriteCity = ["city1","city2","city3","city4","city5",]; // created array
favoriteCity.forEach(name => {
  console.log(name.toUpperCase()); // each city capitalized and results
});
/*
Task 2: Transforming with map()
1. Create an array called numbers with the numbers 1-5.
2. Use map( ) to create a new array called squares where each number is
squared.
3. Log the new array.
4. Add comments to your code that show the expected output as it would be
formatted in the console.
/*
*/
let numbers = [1,2,3,4,5]; // create array
let squares = numbers.map((num) => num * num); // multiplying by itself
  console.log(squares); // results
/*
Task 3: Filtering with filter()
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
100.
2. Use filter() to create a new array called highScores that contains only the
scores greater than or equal to 80.
3. Log the new array.
1
4. Add comments to your code that show the expected output as it would be
formatted in the console.
*/
let scores = [85, 42, 90, 75, 30,100]; // array
let highScores = scores.filter((num => num >= 80)); // finding numbers >= 80
console.log(highScores); // showing result
/*
Task 4: Finding with find() and findIndex()
1. Create an array called favoriteFood that contains a list of your favorite
dishes. Try to add 5 or 6 elements.
2. Use find() to locate the first food with more than 4 letters.
3. Use findIndex( ) to find the index of that food.
4. Log each of these results.
5. Add comments to your code that show the expected output as it would be
formatted in the console.
*/
let favoriteFood = ["apples","bananas","pizza","sandwich","fish"]; // array
let firstFood = favoriteFood.find((food => food.length >=4)); // locate first food with more the 4 letters
let firstIndex = favoriteFood.findIndex((index => index.length >=4));
console.log(firstFood); // shows first food
console.log(firstIndex); // shows first index
/*
Task 5: Checking conditions with some() and every()
1. Create an array called temperatures that contains a list of 5 temperatures
from the forecast for your city.
2. Use some() to check whether any temperatures are above 90 degrees.
3. Use every() to check if all temperatures are above 50 degrees.
4. Log the results as a single array.
5. Add comments to your code that show the expected output as it would be
formatted in the console.
*/
let temperatures = [20,40,60,80,100]; // array
let temperatureChecker = temperatures.some((num => num > 90)); // true result
let sameTemperatureChecker = temperatures.every((num => num > 50)); // false result
let results = [temperatureChecker,sameTemperatureChecker]; // results in same var
console.log(results); // shows results
/*
Task 6: Reducing with reduce()
1. Decide on a total budget for birthday gifts.
2. Create an array called prices that contains the price of 4 items you would
like to purchase as gifts.
3. Use reduce() to subtract each item’s price from your total budget. If the
number is 0 or greater, you will know these items fit within your budget.
4. Log the results.
5. Add comments to your code that show the expected output as it would be
formatted in the console.
*/
let totalBudget = 200; // birthday budget
let prices = [10,20,30,40]; // price
let budgetChecker = prices.reduce((budget, prices) => {
  return budget - prices; // subtracts each price 
}, totalBudget); // initial price at budget variable

if (budgetChecker > 0){ // console result if over or under budget
  console.log(`Within budget: ${budgetChecker}`);
}else console.log(`Over budget: ${budgetChecker}`);


