class School {
  constructor (name,level,numberOfStudents){
    this._name = name; //string
    this._level = level; //string(primary,middle,high)
    this._numberOfStudents; //number
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(numberOfStudentsIn){
    if( typeof numberOfStudentsIn === 'number'){ //checks if it is a number
    this._numberOfStudents = numberOfStudentsIn;
      return numberOfStudentsIn;
    } else {console.log('Invalid input: numberOfStudents must be set to a Number');
         
           }
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  //static method, the parameter takes array of strings, randomly generates a whole number b/w 0 and the length of teachers array, and returns the teacher at the randomly generated index

  static pickSubstituteTeacher(substituteTeachers){ 
   const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
    substituteTeachers[randomTeacher];
    console.log(`${this._name} has a new teacher: ${randomTeacher}`)
    
  }
}

class PrimarySchool extends School {
  constructor (name,numberOfStudents,pickupPolicy){
    super(name,numberOfStudents);
    this._level = 'primary';
    this._pickupPolicy = pickupPolicy;// string
    this._numberOfStudents = numberOfStudents;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor (name,numberOfStudents){
    super(name,numberOfStudents);
    this._level = 'middle';
    this._numberOfStudents = numberOfStudents;
    
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name,numberOfStudents);
    this._level = 'high';
    this._sportsTeams = sportsTeams;//array of strings
    this._nimberOfStudents = numberOfStudents;
  }
  get sportsTeams(){
    return this._sportsTeams;
    console.log(HightSchool.sportsTeams);
  }
}
//Instances of primarySchool and HighSchool
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();// calling quickfacts on the instance
//calling method and passing an array as an argument

//doesnt work right
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'Jamnes Harden', 'Jason Terry', 'Manu Ginobli']);


//HighSchool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Voleyball', 'Track and Field']);
alSmith.sportsTeams;
console.log(alSmith);
console.log(lorraineHansbury);

const ashLee = new MiddleSchool('Ash Lee', 89);
console.log(ashLee);




