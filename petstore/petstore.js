
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    
    if(numAnimals < 0 || avgFood < 0 || isNaN(numAnimals) || isNaN(avgFood)){
    return -1;
  } else {
    return numAnimals * avgFood;
  }
}
// console.log(calculateFoodOrder(-5,2));


/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    if(week == null || week.length == 0){
        return null;
    }

    week.sort(compare);
    var mostPopularDay = [];
    var mostPopularDayValue = week[0].traffic;

    week.forEach(day => {
        if(day.traffic == mostPopularDayValue){
            mostPopularDay.push(day.name);
        }
    });

    if(mostPopularDay.length>1){
        // console.log('The most popular days are: '+ mostPopularDay);
        return mostPopularDay;
    } else{
        // console.log('The most popular day is '+ mostPopularDay);
        return mostPopularDay.toString();
    }    
}
function compare(a,b) {
    if (a.traffic < b.traffic)
      return 1;
    if (a.traffic > b.traffic)
      return -1;
    return 0;
  }

var mon = new Weekday("Monday", 12);
var tue = new Weekday("Tuesday", 5);
var wed = new Weekday("Wednesday", 20);
var thur = new Weekday("Thursday", 20);
var fri = new Weekday("Friday", 1);
var sat = new Weekday("Saturday", 18);
var sun = new Weekday("Sunday", 7);

var weekDays = [mon, tue, wed, thur, fri, sat, sun]

// console.log(mostPopularDays(weekDays));


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    
    
    var animalArr = [];

    if(names == null || types == null || breeds == null || names.length !== types.length || types.length !== breeds.length || names == 0 || types == 0 || breeds == 0){
        return animalArr;
    }
    
         var len = names.length;
        for(var i = 0; i < len; i++){
            animalArr.push({
                name: names[i],
                type: types[i],
                breed: breeds[i]
            });
            // console.log(animalArr);
        }
        return animalArr;

   
}
// var names = null;
var names = ['Buddy', 'Lili', 'Poly'];
var types = ['dog', 'cat', 'bird'];
var breeds = ['labrador', 'persian', 'parrot'];

console.log(createAnimalObjects(names, types, breeds));

// var one = new Animal('Buddy', 'dog', "labrador");
// var two = new Animal('Lili', 'cat', "persian");
// var three = new Animal('Poly', 'bird', "parrot");

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

