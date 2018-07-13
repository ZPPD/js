/*Program gives an Error: this._courses[courseName].push(dish); 
                         ^

TypeError: Cannot read property 'push' of undefined
Meal Maker
*/



//creating and Object menu
const menu = {
  _courses : {    //this is a property object with 3 properties
    appetizers: [],
    mains: [],
    dessets: [],
  
  //getters and setters methods for the properties
set appetizers(appetizersIn) {
  this._appetizer.push(appetizersIn);
},
get appetizers() {
  return this._appetizers;
},
set mains(mainsIn) {
  this._mains.push(mainsIn);
},
get mains() {
  return this._mains;
},
set desserts(dessertsIn) {
 this._desserts.push(dessertsIn);
},
get desserts() {
   return this._desserts;

  },},
  get courses(){  // getter method for the courses property
  return{
    appetizers: this._courses.appetizers,//uses the appetizer getter method
    mains: this._courses.mains,//uses the main getter method
    desserts: this._courses.desserts//uses the dessert main method
  }
},
  addDishToCourse(courseName,dishName,dishPrice){ //method
  const dish = {
  name: dishName,
  price: dishPrice
};
this._courses[courseName].push(dish); 
    /*pushes dish object into the appropriate array in menu's _courses object based on what coursesName was passes in*/
},
getRandomDishFromCourse(courseName){    //method for random course
const dishes = this._courses[courseName];
  
  const randomIndex = Math.floor(Math.random() * dishes.length);//will guarantee that the random number will be b/w 0 and the length of the array
  //return a dish from dishes by using randomIndex
  return dishes[randomIndex];
},
  generateRandomMeal: function (){
    const appetizer = this.getRandomDishFromCourse('appetisers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return 'Your meal is' +appetizer.name + ',' +main.name+ ','+ +dessert.name + '. The price is' +totalPrice + '.';
  }
};
//creating the menu by adding appetizers, main, and desserts with addDishToCourse
menu.addDishToCourse('appetizers','Ceaser Salad', 4.25);
menu.addDishToCourse('appetizers','Chicken Soup', 6.75);
menu.addDishToCourse('appetizers','Mozzarella Sticks', 7.99);

menu.addDishToCourse('mains','Pork Chops', 12.99);
menu.addDishToCourse('main','Salmon', 11.85);
menu.addDishToCourse('main','Beef', 10.79);

menu.addDishToCourse('desserts','Ice Cream', 3.65);
menu.addDishToCourse('desserts','Chocolate cake', 4.99);
menu.addDishToCourse('desserts','Crepes', 4.59);

let meal = meal.generateRandomMeal();
console.log(meal);





