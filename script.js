// pig-game-v2.netlify.app
const rollBtn = document.getElementById('btn--roll')
const diceImage = document.getElementById('dice')
const current0 = document.getElementById('current--0')
const holdBtn = document.getElementById('btn--hold')
const scorePlayerOne = document.getElementById('score--0')
let counter = +scorePlayerOne.innerHTML;
const rollDice = () => {
    const diceNum = Math.floor(Math.random() * 6 + 1)
    console.log(diceNum);
    if (diceNum === 1) {
        diceImage.src = "dice-1.png"
        counter = 0;
        current0.innerHTML = 0;
    } else if (diceNum === 2) {
        diceImage.src = "dice-2.png"
        current0.innerHTML = counter += diceNum
    } else if (diceNum === 3) {
        diceImage.src = "dice-3.png"
        current0.innerHTML = counter += diceNum
    } else if (diceNum === 4) {
        diceImage.src = "dice-4.png"
        current0.innerHTML = counter += diceNum
    } else if (diceNum === 5) {
        diceImage.src = "dice-5.png"
        current0.innerHTML = counter += diceNum
    } else if (diceNum === 6) {
        diceImage.src = "dice-6.png"
        current0.innerHTML = counter += diceNum
    }
    return diceNum;
}

const holdScore = () => {

    if (scorePlayerOne.innerHTML === counter) {
        counter += diceNum
    } else {
        scorePlayerOne.innerHTML = counter;
        current0.innerHTML = 0;
        counter = 0;
    }

}
holdBtn.addEventListener('click', holdScore)
rollBtn.addEventListener('click', rollDice)


console.log("test commit");

