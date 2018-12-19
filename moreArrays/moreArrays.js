/*===========================================
    func that takes an array as an argument and
    prints out the array in reverse order
  ============================================ */
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([3, 6, 2, 5]);

/*======================================
    func which takes an array as an argument and
    returns true if all el in arr are identical
  ============================================*/

function isUniform(arr) {
  var first = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}
isUniform([2, 1, 10, 1]);

/*===========================================
    func that accepts an arr of nums and returns
    the sum of all nums in the arr
    ========================================*/

function sumArray(arr) {
  var total = 0;

  arr.forEach(function(element) {
    total += element;
  });
  return total;
}
sumArray([4, 5, 23]);

/*=========================================
    function that accepts an array of nums and
    returns the max number in the array
    =======================================*/

function max(arr) {
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
max9([1, 3, 40, -56]);

/*==========================================
    There is an array with some numbers. All numbers 
    are equal except for one. Try to find it!
    =========================================*/

function findUniq(arr) {
  // do magic
  let obj = {};
  let answer;

  arr.forEach(num => {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  });
  for (let num in obj) {
    if (obj[num] === 1) {
      return (answer = Number(num));
    }
  }
  return answer;
}
findUniq([1, 1, 1, 2, 1, 1]);

/*=======================================
  Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum. 
  sum_pairs([11, 3, 7, 5], 10)  == [3, 7]
=======================================*/
var sum_pairs = function(ints, s) {
  let limit = ints.length;

  var map = {},
    pair;

  for (var i = 0; i < limit; i++) {
    var a = ints[i];
    var b = s - a;
    var j = map[b];
    if (j !== undefined && i < limit && j < limit) {
      limit = i > j ? i : j;
      pair = i < j ? [a, b] : [b, a];
    }
    var tmp = map[a];
    if (tmp === undefined || i < tmp) {
      map[a] = i;
    }
  }
  return pair;
};

/* ===============================
  Implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
  array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
  array_diff([1,2,2,2,3],[2]) == [1,3]
===========================*/

function array_diff(a, b) {
  if (b.length === 0 || a.length === 0) {
    return a;
  }
  return [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
}
