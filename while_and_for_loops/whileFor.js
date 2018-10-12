/* ======================================
    Print all numbers between -10 and 19
   ====================================== */

// While solution
var counter = -10;

while(counter < 20){
    console.log(counter);
    counter++;
}

// For Solution
for(var i = -10; i < 20; i++){
    console.log(i);
}

/* ======================================
    Print all numbers between 10 and 40
   ====================================== */

// While solution
var counter = 10;

while(counter <= 40){
    // one way to do it: shorter and more efficient
    // console.log(counter);
    // counter += 2;
    if(counter % 2 === 0){
        console.log(counter);
    }
        counter+=1;
}
// For Solution
for(var i = 10; i <= 40; i +=2){
    console.log(i);
}
//another for solution
for(var i = 10; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

/* ======================================
    Print odd numbers between 300 and 333
   ====================================== */

// While solution
var counter = 300;

while(counter <= 333){
    if(countere % 2 !== 0){
        console.log(counter);
    }
    counter+=1;
}

// For Solution
for( var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

/* =================================================
    Print all divisible by 5 and 3 bedteen 5 and 50
   ================================================= */

// While solution
var counter = 5;

while(counter <= 50){
    if(counter % 5 === 0 && counter % 3 === 0){
    console.log(counter);
    }
    counter+=1;
}

// For Solution
for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}