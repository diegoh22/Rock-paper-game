const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const scoreEL = document.getElementById('score');

const userWinner = ['scissorspaper', 'paperrock','rocklizard','lizardspock','spockscissors',

'rockscissors', 'scissorslizard','lizardpaper','paperspock','spockrock']

let score = ('0')
let userchoice = '';
let pickRandomChoice = '';

window.addEventListener('load', () => {

document.querySelectorAll('.user-choice .game-choice').forEach(card => {

card.addEventListener('click',(ev) => {

userChoice = ev.target.dataset.choice
pickRandomChoice = getpickRandomChoice();

 starGame();
})

})

})

function starGame() {

   findWinner('userchoice, pickRandomChoice');
}

function findWinner(user, comp) {
    if(user === comp) {
        console.log('tie');
    }
    else if (getuserWinner(user + comp)) {
        console.log('you Lose');
    } else{
     
        console.log('You Win');

    }
}
function getuserWinner(result){
    return userWinner.some(Winstr => Winstr === result);
}



function updateScore(value) {
    score += value;
    scoreEL.innerText = score;
}

function getpickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
