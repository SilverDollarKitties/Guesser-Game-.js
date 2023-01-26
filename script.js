let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarger = () => {
  Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
const humandiff = Math.abs(targetGuess - humanGuess);
const computerdiff = Math.abs(targetGuess - computerGuess);

return humandiff <= computerdiff;
};

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}

