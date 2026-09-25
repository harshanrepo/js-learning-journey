let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    ties: 0
};


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win.';
        }
    }

    if (result === "You win.") {
        score.win += 1;
    }
    else if (result === "You lose.") {
        score.loss += 1;
    }
    else {
        score.ties += 1
    }

    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector('.score_result').innerHTML = `${result}`;
    document.querySelector('.score_show').innerHTML = `You Pick - <img src="images/${playerMove}-emoji.png" class="move-icon">Computer Pick - <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    document.querySelector('.score_points').innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.ties}.`;
}

function resetScore() {
    score = {
        win: 0,
        loss: 0,
        ties: 0
    };
    localStorage.removeItem('score');
    document.querySelector('.score_points').innerHTML = `Wins:${score.win}, Losses:${score.loss}, Ties:${score.ties}.`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}