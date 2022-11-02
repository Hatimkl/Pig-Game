const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const imgDice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnHold = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

score0.textContent = 0;
score1.textContent = 0;
imgDice.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle("player--active");
  player0.classList.toggle("player--active");
};

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function rolling() {
  let random = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove("hidden");
  imgDice.src = `images/dice-${random}.png`;
  if (random !== 1) {
    currentScore = currentScore + random;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}

function holding() {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    btnHold.style.display = "none";
    rollDice.style.display = "none";
    imgDice.style.display = "none";
  } else {
    switchPlayer();
  }
}

function newGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  btnHold.style.display = "block";
  rollDice.style.display = "block";
  imgDice.style.display = "block";
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
}

newGameBtn.addEventListener("click", newGame);
rollDice.addEventListener("click", rolling);
btnHold.addEventListener("click", holding);
