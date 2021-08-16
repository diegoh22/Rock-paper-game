

window.addEventListener('load', () => {

let userchoice = '';

document.querySelectorAll('.user-choice .game-choice').forEach(card => {

card.addEventListener('click',(ev) => {

userChoice = ev.target.dataset.choice


})

})

})


