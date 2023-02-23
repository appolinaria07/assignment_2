
let coinFlip = Math.round(Math.random());
// console.log(coinFlip)

const choice = prompt('Enter Heads or Tails').toLowerCase();

if (coinFlip < 1) {

    coinFlip = 'heads';
    (coinFlip === choice) ? alert('The flip was heads and you chose heads... you win!') : alert('The flip was heads and you chose tails...you lose!')
    
} else {
    
    coinFlip = 'tails';
    (coinFlip === choice) ? alert('The flip was tails and you chose tails...you win!') : alert('The flip was tails and you chose heads...you lose!')

}