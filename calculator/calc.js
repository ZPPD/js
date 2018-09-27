/*
 * Implement all your JavaScript in this file!
 */
 "use strict";
// map operator buttons id with their function
var functionMap = {
	"addButton" : (a, b) => a + b,
	"subtractButton" : (a, b) => a - b,
	"multiplyButton" : (a, b) => a * b,
	"divideButton" : (a, b) => a / b
};

// give an array, values at index 0 and 2, operator at index 1
// calculate the operation
function evaluate(arr) {
 	return functionMap[arr[1]](arr[0], arr[2]);
};

var arr = [];
var display = '';
var current;


$(function() {
    $(".num").click(function() {
    	if (arr.length == 1 || arr.length == 3) { // new operation 
    		display = '';
    		arr = [];
    	} 

    	display += $(this).val();
    	$("#display").val(Number(display));
    	current = Number(display);
 	});

 	$("#clearButton").click(function() { // restore to initial state
 		display = '';
 		arr = [];
 		current = NaN;
 		$("#display").val(display);
 	});

 	$(".functionBtn").click(function() {
 		if (arr.length == 3) { // just perform an operation and continue another
 			arr = [];
 			arr.push(Number(display));
 			arr.push(this.id);
 		} else if (arr.length == 2) { // in middle of operation
 			if (isNaN(current)) { // operator after operator 
 				arr[1] = this.id; // replace with the recent
 			} else { // user have inputed the right hand side of the operation
 				arr.push(Number(display));
 				display = evaluate(arr);
 				$("#display").val(display);
 				arr = [display, this.id]; // ready for the next operation
 			}
 		} else if (arr.length == 1) { // user have inputed the left hand side of the operation and pressed the equals button
 			arr.push(this.id);
 		} else { // user have inputed the left hand side
 			arr.push(Number(display));
 			arr.push(this.id);
 			display = ''; 
 		}
 		current = NaN;
 		// console.log(arr);
 		display = ''; 		
 	});

 	$("#equalsButton").click(function() {
 		// console.log(arr); 		
 		if (arr.length == 0) { // reset state
 			if (current) { // user have inputed some numbers
 				arr = [current];
 			}
 		} else if (arr.length == 2) {  
 			if (!isNaN(current)) { // basic use case
 				arr.push(Number(display));
 				console.log(arr);
 				display = evaluate(arr);
 				$("#display").val(display);				
 			} // else ignore		
 		} else if (arr.length == 3) { // the previous operation should be repeated using the result of the operation and the most recently entered operand
 			arr[0] = display;
 			display = evaluate(arr);
 			$("#display").val(display);
 		} 		
 	});
});




