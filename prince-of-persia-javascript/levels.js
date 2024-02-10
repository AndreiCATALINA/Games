function level6(){
  getStairsMovementDirection();
  getZigZagMovementDirection();
  manuallyControl();
}

function getStairsMovementDirection(stairNumber, isClimbingStairs){
  if(stairNumber % 2 === 0 && isClimbingStairs === false){
    return "down";
  } else if(stairNumber % 2 !== 0 && isClimbingStairs === false){
    return "right";
  } else if(stairNumber % 2 === 0 && isClimbingStairs === true){
    return "up";
  } else if(stairNumber % 2 !== 0 && isClimbingStairs === true){
    return "right";
  }
  
}

function getZigZagMovementDirection(step){
  if(step === 0){
    return "up";
  } else if(step === 3){
    return "down";
  } else if(step === 6){
    return "up";
  } else if(step === 9){
    return "down";
  } else return "right";
}
let isQPressed = false
function manuallyControl(key){
  
  if(key==="KeyQ"){
    isQPressed = !isQPressed;
  }
  if(isQPressed){
   if(key==="KeyA"){
      moveDirection("left")
   }
   if(key==="KeyS"){
      moveDirection("down")
   }
   if(key==="KeyD"){
     moveDirection("right")
    }
    if(key==="KeyW"){
     moveDirection("up")
   }
  }
  if(!isQPressed){
    if(key==="ArrowLeft"){
      moveDirection("left")
   }
   if(key==="ArrowDown"){
      moveDirection("down")
   }
   if(key==="ArrowRight"){
     moveDirection("right")
    }
    if(key==="ArrowUp"){
     moveDirection("up")
   }
  }
}


function givePotion2Answer(list){ 
  let sum = 0;
  for(let i=0; i < list.length; i++){
    if(list[i] % 2 == 0){
      sum+= list[i];
    }
  }
  return sum;
}

function givePotion3Answer(list){
  let max = 0
  for(let i = 0; i < list.length; i++){
    if(max <= list[i]){
      max = list[i];
    }
  }
  return max;
}

function givePotion4Answer(input,toCapitalize){
  let result ="";
  for( let i=0; i<input.length;i++){
    if(toCapitalize.includes(input[i])){
      result += input[i].toUpperCase()
    }else{
      result +=input[i]
    }
  }
  return result
}


function givePotion5Answer(hours, minutes, seconds, secondsToAdd){
  let result = secondsToAdd + seconds;
  if(result >= 60){
    minutes += 1;
    seconds = result - 60;
    if(minutes >= 60){
      hours += 1;
      minutes = 0;
      if(hours == 24){
        hours = 0;
      }
    }
  }
  return hours + ":" + minutes + ":" + seconds;
  
}

function givePotion6Answer(input){
    let arr = input.split("");
    console.log(arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== "*"){
        sum += Number(arr[i]);
      }
    }
    return sum;
}

function givePotion7Answer(input){
  let arr = input.split("");
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(!isNaN(Number(arr[i]))){
      sum += Number(arr[i]);
    }
  }
  return sum;
}

function givePotion8Answer(number){
  let result = true;
  for(let i = 2; i < number/2; i++){
    if(number % i === 0){
      result = false;
    }
  }
  if (result === true){
    return true;
  } else {
    return false;
  }
  
}

function givePotion9Answer(list){
  let min1 = list[0];
  for(let i = 0; i < list.length; i++){
    if(min1 >= list[i]){
      min1 = list[i];
    }
  }
  const index = list.indexOf(min1);
  const x = list.splice(index, 1);
  let min2 = list[0];
  for(let i = 0; i < list.length; i++){
    if(min2 >= list[i]){
      min2 = list[i];
    }
    console.log(min1);
    console.log(min2);
  let sum = min1 + min2;
  return sum;
  }
}

function givePotion10Answer(letterToFind, input){
  let x = 0;
  let arr = input.split("");
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === letterToFind){
      return i;
    }
  }
  return -1;
}

function givePotion11Answer(input, letterToReplace, letterToPutInstead){
  let arr = input.split("");
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === letterToReplace){
      arr[i] = letterToPutInstead;
    }
  }
  return arr.join("");
}

function givePotion12Answer(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
      sum += numbers[i] * (-1)
    } else {
      sum += numbers[i];
    }
  }
  return sum;
}

let exTile="";

function hasMovedToTile(direction, tileToCheck){
  tileToCheck = exTile
  moveDirection(direction)
}
function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince){

if((elementDownOfPrince===11 || elementDownOfPrince===99)&&(exTile!=="down")){
    hasMovedToTile("down")
    exTile="up";
    return
  }
if((elementLeftOfPrince===11 || elementLeftOfPrince===99)&&(exTile!=="left")){
      hasMovedToTile("left")
      exTile="right";
      return 
  }
if((elementRightOfPrince===11 || elementRightOfPrince===99)&&(exTile!=="right")){
    hasMovedToTile("right")
    exTile="left";
    return
}
if((elementUpOfPrince===11 || elementUpOfPrince===99)&&(exTile!=="up")){
  hasMovedToTile("up")
  exTile="down";
  return
}
}

function level8Move(gameMap){
  let arr = [];
  let x = 0;
  while(x !== 1)
  for(let i = 0; i < gameMap.length; i++){
    for(let j = 0; j < gameMap[i].length; j++){
      if(gameMap[i][j] === 10){
        if(gameMap[i-1][j] === 11 || gameMap[i-1][j] === 99){
          if(gameMap[i-1][j] === 99){
            arr.push("up")
            x = 1;
            break;
          }
          gameMap[i-1][j] = 10
          gameMap[i][j] = 13
          arr.push("up");
          
        } else if(gameMap[i+1][j] === 11 || gameMap[i+1][j] === 99){
          if(gameMap[i+1][j] === 99){
            arr.push("down")
            x = 1;
            break;
          }
          gameMap[i+1][j] = 10
          gameMap[i][j] = 13
          arr.push("down")
          
        } else if(gameMap[i][j-1] === 11 || gameMap[i][j-1] === 99){
          if(gameMap[i][j-1] === 99){
            arr.push("left")
            x = 1
            break
          }
          gameMap[i][j-1] = 10;
          gameMap[i][j] = 13;
          arr.push("left")
          
        } else if(gameMap[i][j+1] === 11 || gameMap[i][j+1] === 99){
          if(gameMap[i][j+1] === 99){
            arr.push("right")
            x = 1;
            break
          }
          gameMap[i][j+1] = 10;
          gameMap[i][j] = 13;
          arr.push("right")
        }
        }
      }
    }
  
    return arr;
  }


  


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };