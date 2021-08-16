const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];



window.addEventListener('load', () => {

let userchoice = '';

document.querySelectorAll('.user-choice .game-choice').forEach(card => {

card.addEventListener('click',(ev) => {

userChoice = ev.target.dataset.choice


})

})

})


function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
