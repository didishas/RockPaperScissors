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
        if((playerSelection === this.rocks)  && (computerSelection === this.scissors)){
            return 'You Win ! Rock beats Scissors';
        }else if((computerSelection === this.rocks)  && (playerSelection === this.scissors)){
            return 'You Lose! Rock beats Scissors';
        }else if((playerSelection === this.paper)  && (computerSelection === this.scissors)){
            return 'You Lose! Scissors beats Paper';
        }else if((computerSelection === this.paper)  && (playerSelection === this.scissors)){
            return 'You Win ! Scissors beats Paper';
        }else if((playerSelection === this.rocks)  && (computerSelection === this.paper)){
            return 'You Lose! Paper beats Rock';
        }else if((computerSelection === this.rocks)  && (playerSelection === this.paper)){
            return 'You Win ! Paper beats Rock';
        }else {
            return 'equality';
        }
    },
    game (){
        const rounds = 5;
        let playerScore = 0;
        let computerScore = 0;
        for (let index = 0; index < rounds; index++) {
            let playerSelection = prompt("What is your choice ?");
            let computerSelection = Controller.computerPlay();
            let result = this.playRound(playerSelection, computerSelection);

            console.log(result);

            if(/win/gi.test(result)){
                playerScore++;
                console.log(playerScore);
            }else if(/lose/gi.test(result)){
                computerScore++;
            }
        }

        switch (true) {
            case playerScore > computerScore:
                console.log(`Congratulations, You have won by ${playerScore}`)
                break;
            case playerScore < computerScore:
                console.log(`Sorry, \ncomputer: ${computerScore} \nPlayer: ${playerScore} \nYou've lost. `)
                break;
            default:
                console.log(`Perfect Equality ${playerScore}`)
                break;
        }
    }
}
})();


Controller.game();