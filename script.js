let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
}

function compareGuesses(humanGuess,computerGuess,secretGuess){
  var human=Math.abs(secretGuess-humanGuess);
  var computer=Math.abs(secretGuess-computerGuess);
  if(computer === human){
    return true;
  }else if(computer > human){
    return true;
  }else{
    return false;
  }
}


function updateScore(winner){
  if(winner==="human"){
    humanScore++;
  }
  else if(winner==="computer"){
    computerScore++;
  }
}

function advanceRound(){
 currentRoundNumber++;
}
