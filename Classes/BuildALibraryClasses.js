//parent class, do not include commas b/w methods when using classes
class Media{
  constructor(title){
   this. _title = title;//this is a string
    this._isCheckedOut = false;//this is boolean
    this._ratings = [];// this is an array, initially empty
  }
  get title (){
    return this._title;
  }
    get isCheckedOut (){
      return this._isCheckedOut;
    }
  get ratings (){
    return this._ratings;
  }
   set isCheckedOut(isCheckedOutIn){
    this._isCheckedOut = isCheckedOutIn;
  }
  //method that changes the value saved to _isCheckedOut 
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  //method that returns the average value of the rating array
  getAverageRatings(){
   //calculate the sum of the numbers saved to the ratings array
    let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating, 0);
    //to access the length of the array
    const lengthOfRatings = this.ratings.length;
    //getting the average
    let average = ratingsSum/lengthOfRatings;
    return Math.round(average);
  }
  addRating(newRatings){
    this.ratings.push(newRatings);
  }
}
// build a Book class that extends Media
class Book extends Media{
  constructor (title,author,pages){
    super(title);//calls the constructor from the parent class
    this._author = author;//this is a string
    this._pages;//this is a number
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
 }
//build a Movie class that extends Media
class Movie extends Media{
  constructor (title,director,runTime){
    super(title);
    this._director = director;//this is a string
    this._runTime;//this is a number
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
//creating a Book instance
const historyOfEverything = new Book('AShort History of Nearly Everyhing', 'Bill Bryson',544);
//calling toggleChechOutStatus on the historyOfEverything
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
//calling.addRating 3 times on historyOfEverything
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//call .getAverageRating on historyOfEverything
historyOfEverything.getAverageRatings();
console.log(historyOfEverything.getAverageRatings());

//creating a Movie instance
const speed = new Movie('Speed','Jan de Bont',116);
//call .toggleCheckOutStatus on the speed instance
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
//call .addRatings on speed
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//call .getAverage on speed
speed.getAverageRatings();
console.log(speed.getAverageRatings());

/* 
Nice work! If you've made it this far, you clearly have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

    Add more properties to each class (movieCast, songTitles, etc.)
    Create a CD class that extends Media.
    In  .addRating(), make sure input is between 1 and 5.
    Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    Create class called Catalog that holds all of the Media items in our library.


*/





