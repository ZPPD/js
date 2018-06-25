let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is ', 'about', 'what', 'you', 'can', 'figure', 'out', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove from the end of an array
let remove = secretMessage.pop();

//check the length of the array
console.log(secretMessage.length);

//add to the end of the array
let addToEnd = secretMessage.push('to');
let addAgain = secretMessage.push('Program');

//changing a word in the array
secretMessage[7] = 'right';

//remove from the front
let frontRemove = secretMessage.shift();
//add to the front
let add = secretMessage.unshift('Programming');

/*remove elements from 6 to 10 and replace with 'know'
array.splice(indexToStart,numberOfIndices,'stringToAdd')*/
let removeStrings = secretMessage.splice(6,5,'know,');

//copy an array
let copy = secretMessage.slice();
//copy form 2 to end
let startCopy = secretMessage.slice(2);
//copy from 2 to 6
let anotherCopy = secretMessage.slice(2,4);

//print the array as a sentence, space between the quotation marks to keep the words separated
console.log(secretMessage.join(' '));

------------------------------------------------

//loop through an array forEach()
let array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

//creating a new array with certain conditions using map()
let array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]


//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//reversing an array
let array1 = ['one', 'two', 'three'];
let reversed = array1.reverse(); 

console.log(array1);
// expected output: Array ['three', 'two', 'one']

console.log(reversed);
// expected output: Array ['three', 'two', 'one']

//sorting the elements of an array. The default sort order is according to string Unicode code points.
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

let array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);
// expected output: Array [1, 21, 30, 4]


