// keyboard press funtion

function keyboardPress(e) {
  const playerdPress = e.key;

  // stop the game if press ESC

  if (playerdPress === "escape") {
    gameOver();
  }

  const currentAlphabetElement =
    document.getElementById("random-text").innerText;

  const currentAlphabet = currentAlphabetElement.toLowerCase();

  if (playerdPress === currentAlphabet) {
    // const gameScoreElement = document.getElementById("game-score");
    // const currentScore = parseInt(gameScoreElement.innerText);
    // console.log(currentScore);
    const currentScore = getTextElementValueById("game-score");
    const newScore = currentScore + 1;
    // gameScoreElement.innerText = newScore;
    setTextElementValueById("game-score", newScore);
    setTextElementValueById("score-result", newScore);

    //round
    removedHighlightBackground(currentAlphabet);
    continueTheGame();

    //   score result
    // const scoreResultElement = document.getElementById("score-result");
    // scoreResultElement.innerText = currentScore;
  } else {
    // const currentLifeElement = document.getElementById("player-life");
    // const currentLife = parseInt(currentLifeElement.innerText);
    const currentLife = getTextElementValueById("player-life");
    if (currentLife === 1) {
      gameOver();

      // show score bord
    }
    const reduceLife = currentLife - 1;
    // currentLifeElement.innerText = reduceLife;
    setTextElementValueById("player-life", reduceLife);
  }
}

document.addEventListener("keyup", keyboardPress);

// continue the game

function continueTheGame() {
  // step:1  genarete rendom alphabate
  const alphabet = randomAlphabet();
  highlightBackground(alphabet.toLowerCase());
}

function play() {
  elementHiddenById("home-screen");
  elementHiddenById("score-board");

  // set by defult playerlife
  setTextElementValueById("player-life", 3);
  setTextElementValueById("game-score", 0);

  elementShowById("playground-screen");
  continueTheGame();
}

// game over

function gameOver() {
  elementShowById("score-board");
  elementHiddenById("playground-screen");

  // score result reset

  // get current alphabet

  const currentAlphabetText = document.getElementById("random-text");
  const currentAlphabetAfterGame = currentAlphabetText.innerText;
  removedHighlightBackground(currentAlphabetAfterGame.toLowerCase());
}
