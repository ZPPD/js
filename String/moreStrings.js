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

/* ================================
 Return true if a portion of str1 characters can be rearranged to match str2, otherwise return false.
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
==============================*/
function scramble(str1, str2) {
  const counts = new Map();
  for (let i of str1) {
    counts.set(i, (counts.get(i) || 0) + 1);
  }
  for (let i of str2) {
    let value = counts.get(i);
    if (!value) {
      return false;
    }
    counts.set(i, value - 1);
  }
  return true;
}
