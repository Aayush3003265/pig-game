// pig-game-v2.netlify.app
const rollBtn = document.getElementById('btn--roll')
const diceImage = document.getElementById('dice')
const current0 = document.getElementById('current--0')
const holdBtn = document.getElementById('btn--hold')
const scorePlayerOne = document.getElementById('score--0')
const whichActive = document.querySelectorAll('#player');
let counter1 = +scorePlayerOne.innerHTML;
const rollDice = () => {
    const diceNum = Math.floor(Math.random() * 6 + 1)
    console.log(diceNum);
    diceImage.src = `dice-${diceNum}.png`;
    if (diceNum === 1) {
        counter1 = 0;
        current0.innerHTML = 0;
        switchPlayer();
    } else {
        current0.innerHTML = counter1 += diceNum;
    }
    return diceNum;
}

const holdScore = () => {
    scorePlayerOne.innerHTML = counter1;
    current0.innerHTML = 0;
    counter1 = 0;
    switchPlayer();
}
function switchPlayer() {
    if (whichActive[0].classList.contains('player--active')) {
        whichActive[1].classList.add('player--active');
        whichActive[0].classList.remove('player--active');
    } else {
        whichActive[0].classList.add('player--active');
        whichActive[1].classList.remove('player--active');
    }
}

holdBtn.addEventListener('click', holdScore)
rollBtn.addEventListener('click', rollDice)
