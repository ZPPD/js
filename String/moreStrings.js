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

/* ================== 
  Reverse a string 
  reverseString('hello') === 'olleh'
======================= */

function reverseString(str) {
  /* ======== Solution 1 ==========
  const arr = str.split('');
  arr.reverse();

  return arr.join('');*/

  ///////

  /* ======== Solution 2 =========  
  let revStr = '';
    for(let i = str.length -1; i>=0; i--){
      revStr = revStr + str[i];
    }
  return revStr;*/

  //////

  /* ========== Solution 3 =========
  let revStr = '';
    for(let i = 0; i <= str.length -1; i++){
      revStr = str[i] + revStr;
    }
  return revStr;*/

  ////

  /* ======= Solution 4 =============
  let revStr = '';
    for(let char of str){
      revStr = char + revStr;
    }
  return revStr;*/

  //////

  /* ========= Solution 5 ============
  let revStr = '';
  str.split('').forEach(function(char){
    revStr = char + revStr;
  });
  return revStr;*/

  /* ========== Solution 6 ==========
  let revStr = '';
  str.split('').forEach(char => revStr = char + revStr);
  return revStr;*/

  //////

  /* =========== Solution 7 ===========
  return str.split('').reduce(function(revStr, char){
    return char + revStr;
  }, '')*/

  // ======== Solution 8 ==========
  return str.split("").reduce((revStr, char) => char + revStr, "");
}

/*========================
 Return true if palindrome and false if not
   ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
==============================*/

function isPalindrome(str) {
  const revStr = str
    .split("")
    .reverse()
    .join("");

  return revStr === str;
}

console.log(isPalindrome("racecar"));
