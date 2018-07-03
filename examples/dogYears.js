//my age
const myAge = 28;

//first 2 years of dogs life
let earlyYears = 2;

//calculate the age after the first 2 years
earlyYears *= 10.5;

//getting older
let laterYears = myAge - 2;

//calculate number of dog years accounted by my later years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//my name in lower case
let myName = 'Bibs'.toLowerCase();

//my name and dog years age
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
