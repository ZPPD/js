const input = 'turpentine and turtles';

let vowels = ['a', 'e', 'u', 'i', 'o'];

let resultArray = [];

//loop that looks for the vowels in the input string
for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //this loop will fire 5 times(the original length of the vowels array) for each letter in the original input 
  for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
    if(input[inputIndex] === vowels[vowelIndex]){
      resultArray.push(input[inputIndex]); 
    }
  }
    //it is in the outer loop, because we want to perform this check once for every letter in the original input, it doubles the letter e and u
    if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
      resultArray.push(input[inputIndex]);
    }
   
}
console.log(resultArray.join('').toUpperCase());
