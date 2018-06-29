//Replace A with T, T with A, C with G, G with A, in a string


function DNAStrand(dna){
  //create an object
var repl = {'A': 'T','T': 'A','C': 'G','G': 'C'};
//create a var and use regular expression, m==every el from the obj
var newStr = dna.replace(/[ATCG]/g, m => repl[m]);
console.log(dna);

//this works just for one letter
  /*var newStr = dna.replace(/A/g, 'T');*/

  
  console.log(newStr);
  return newStr;
  
 
}
