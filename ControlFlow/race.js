//randomly assigned race numbers from 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);

//can change to false
const earlyRegister = true;

//can change the age
let runnersAge = 26;

//control flow statement if runner is adult and registered early, number over 1000
if (runnersAge > 18 && earlyRegister){
  raceNumber += 1000;
}

//control flow check age and registration time to determine race time, 18 see the registration desk
if (runnersAge > 18 && earlyRegister){
  console.log(`Number ${raceNumber} will race at 9:30 am.`)
} else if (runnersAge > 18 && !earlyRegister){
  console.log(`Number ${raceNumber} will race at 11:00 am.`)
} else if (runnersAge < 18){
  console.log(`Number ${raceNumber} will race at 12:30 pm.`)
} else {console.log('Please see the registration desk')
       }
