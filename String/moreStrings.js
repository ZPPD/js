/* ===============================
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
===========================*/

function pigIt(str) {
  //Code here
  const arr = str.split(" ");
  const punctuation = /[!,.?]/;
  const output = arr.map(word =>
    !punctuation.test(word) ? word.slice(1) + word.slice(0, 1) + "ay" : word
  );

  return output.join(" ");
}
