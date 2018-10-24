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
findUniq([ 1, 1, 1, 2, 1, 1 ]);
