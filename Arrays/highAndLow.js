//given string of numbers, return the highest and lowest number 

function highAndLow(numbers){
  // string to array, and empty string out
  var arr = numbers.split(' ');
  var out = [];
 
 //loop through array and sort in asc 
 for(var i=0; i<=arr.length; i++){
  arr.sort(function compare(a,b){
  return a-b;
  })};
 
 //assign the first and last el. to the empty array
 out.push(arr[arr.length-1], arr[0]);
 
 //array to string
 var result = out.join(' ');
 return result;
  
  }
