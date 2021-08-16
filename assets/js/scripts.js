window.addEventListener('load', () => {
let userchoice = '';
document.querySelectorAll('.user-choice .game-choice').forEach(card => {
card.addEventListener('click',(ev) => {
userChoice = getUserChoice(ev.target)
startGame();
}
)
})
})
function startGame(){
}
function getUserChoice(target) {
console.log(target);
}

function getUserChoice(target) {
console.log(target);
if (target.nodeName === "IFRAME") {
return target.parentElement.classList[1];
}
return target.classList[1];
}
