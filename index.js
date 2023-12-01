import food_items from "./listfiles.json" assert {"type": "json"};



//task 1 - list all the food items
function AllFoodItems(data){ 
  return data
}

var task1 = AllFoodItems(food_items)
console.log(task1);

function getCategories(category_label){
  return food_items.filter((value) => value.category === category_label);
}

//task 2 - list all the food items with category vegetables
const task2 = getCategories("Vegetable")
console.log(task2);

//task 3 - list all the food items with category fruit
const task3 = getCategories("Fruit")
console.log(task3);

//task 4 - list all the food items with category protien
const task4 = getCategories("Protein")
console.log(task4);

//task 5 - list all the food items with category nuts
const task5 = getCategories("Nuts")
console.log(task5);

//task 6 - list all the food items with category grains
const task6 = getCategories("Grain")
console.log(task6);

//task 7 - list all the food items with category dairy
const task7 = getCategories("Dairy")
console.log(task7);

//task 8 - list all the food items with calorie above 100
function getCaloriesAbove100(value) {
  return value.calorie > 100
} 
const task8 = food_items.filter(getCaloriesAbove100);
console.log(task8);

//task 9 - list all the food items with calorie below 100
function getCaloriesBelow100(value) {
  return value.calorie < 100
} 

const task9 = food_items.filter(getCaloriesBelow100);
console.log(task9);

//task 10 - list all the food items with highest protien content to lowest
function highesttolowest(data) {  
  return data.sort((item1, item2) => item2.protiens - item1.protiens);
}
const task10 = highesttolowest(food_items);
console.log(task10);

//task 11 - list all the food items with lowest cab content to highest
function lowesttohighest(data) {
  return data.sort((item1, item2) => item1.cab - item2.cab);
}
const task11 = lowesttohighest(food_items);
console.log(task11);