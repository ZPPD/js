//user can enter their name here
let userName ='';

//Ternary expression, what to do if user enters name or not
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//the question
const userQuestion = 'Will it rain tomorrow?';

console.log(`${userName} asked: ${userQuestion}`);

//generate a random number b/w 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//control flow that takes the random number and assigns the eight ball to a reply, can be done with if/else if/else statements
switch (randomNumber) {
  case 0:
    eightBall = 'It is Certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sourses say No';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to Yes';
    break;
                        }
console.log(eightBall);
