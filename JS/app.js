console.log('Starting a New Game');

const Controller = (function(){
    // Constants and Variables
const signs = ['rock', 'paper', 'scissors'];

//todo 3. Create  a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ 👍
// My Principal Functions 
return {
    rocks: signs[0],
    paper: signs[1],
    scissors: signs[2],
    computerPlay(){
        return signs[Math.floor(Math.random()*signs.length)]
    },
    // todo 4. Write a function that plays a single round of Rock Paper Scissors then return a string that declares the winner of the round 👍
    playRound(playerSelection, computerSelection) {
        // your code here!
        playerSelection = playerSelection.toLowerCase();
        // let playerSelection = prompt("What is your choice ?");
        if((playerSelection === this.rocks)  && (computerSelection === this.scissors)){
            return 'You Win! Rock beats Scissors';
        }else if((computerSelection === this.rocks)  && (playerSelection === this.scissors)){
            return 'You Lose! Rock beats Scissors';
        }else if((playerSelection === this.paper)  && (computerSelection === this.scissors)){
            return 'You Lose! Scissors beats Paper';
        }else if((computerSelection === this.paper)  && (playerSelection === this.scissors)){
            return 'You Win! Scissors beats Paper';
        }else if((playerSelection === this.rocks)  && (computerSelection === this.paper)){
            return 'You Lose! Paper beats Rock';
        }else if((computerSelection === this.rocks)  && (playerSelection === this.paper)){
            return 'You Win! Paper beats Rock';
        }else {
            return 'equality';
        }
    }
}
})();

const UI = (function(){
    let playerSelection = 'RoCK';
    let computerSelection = Controller.computerPlay();
    return Controller.playRound(playerSelection, computerSelection);
})();


console.log(UI);