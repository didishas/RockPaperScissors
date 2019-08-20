console.log('Starting a New Game');
// Constants and Variables
const signs = ['Rock', 'Paper', 'Scissors'];

//todo 3. Create  a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ 👍
// My Principal Functions 
const computerPlay = function(){
    return signs[Math.floor(Math.random()*signs.length)]
}
computerPlay();