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

/*============================
 Multiply numbers as strings. 
============================*/

function multiply(a, b) {
  /* ====Solution 1 for small numbers ====
  var num1 = +a;
  var num2 = +b;

  var result = num1 * num2;
  //console.log(result);
  return `${result}`;
}
  // console.log(multiply("11", "85")); returns '935'
  // console.log(multiply("98765", "56894")); returns "5619135910"
  */

  /* ==== Solution 2 ==== 
  
  const {BigInteger} = require('bignumber');

function multiply(a, b) {
  return new BigInteger(a).multiply(new BigInteger(b)).toString();
}
  */

  /* === Solution 3 works with big numbers */
  if (parseInt(a) == 0 || parseInt(b) == 0) {
    return "0";
  }

  a = a.split("").reverse();
  b = b.split("").reverse();
  var result = [];

  for (var i = 0; a[i] >= 0; i++) {
    for (var j = 0; b[j] >= 0; j++) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }

      result[i + j] += a[i] * b[j];
    }
  }
  console.log(result);
  for (var i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }

      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }
  while (result[result.length - 1] === 0) {
    result.pop();
  }
  return result.reverse().join("");
}

console.log(multiply("1020303004875647366210", "2774537626200857473632627613")); // returns "2830869077153280552556547081187254342445169156730"
