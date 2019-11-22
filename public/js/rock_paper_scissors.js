const player_score = document.getElementById('player_score');
const draw_score = document.getElementById('draw_score');
const computer_score = document.getElementById('computer_score');
const messageDIV = document.getElementById('message');

let playerScore = 0;
let compScore = 0;
let draw = 0;
let noDraw = true;

function init() {
    desplayScore();
}

function paperRockScissors(player) {
    let comp = Math.floor(Math.random() * 3)
    let chose = ['rock', 'paper', 'scissors'];
    let playerChose = chose[player];
    let compChose = chose[comp];
    let tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
    let outCome = `You chose: <strong>${capitalizeFirstLetter(playerChose) }!</strong>${tab}Computer chose: <strong>${capitalizeFirstLetter(compChose)}!</strong>`;

    switch (compChose) {
        case 'paper':
            if (playerChose === 'rock') {
                scoreBoard('comp');
                messageDIV.innerHTML = outCome + `${tab} <strong>Computer WINS!!!</strong>`;
                break;
            } else if (playerChose === 'scissors') {
                scoreBoard('player');
                messageDIV.innerHTML = outCome + `${tab} <strong>Player WINS!!!</strong>`;
                break;
            } else {
                scoreBoard('draw');
                messageDIV.innerHTML = outCome + `${tab} <strong>Draw!!!</strong>`;
                break;
            }
        case 'rock':
            if (playerChose === 'scissors') {
                scoreBoard('comp');
                messageDIV.innerHTML = outCome + `${tab} <strong>Computer WINS!!!</strong>`;
                break;
            } else if (playerChose === 'paper') {
                scoreBoard('player');
                messageDIV.innerHTML = outCome + `${tab} <strong>Player WINS!!!</strong>`;
                break;
            } else {
                scoreBoard('draw');
                messageDIV.innerHTML = outCome + `${tab} <strong>Draw!!!</strong>`;
                break;
            }
        case 'scissors':
            if (playerChose === 'paper') {
                scoreBoard('comp');
                messageDIV.innerHTML = outCome + `${tab} <strong>Computer WINS!!!</strong>`;
                break;
            } else if (playerChose === 'rock') {
                scoreBoard('player');
                messageDIV.innerHTML = outCome + `${tab} <strong>Player WINS!!!</strong>`;
                break;
            } else {
                scoreBoard('draw');
                messageDIV.innerHTML = outCome + `${tab} <strong>Draw!!!</strong>`;
                break;
            }
        default:
            break;
    }
}

function scoreBoard(winner) {
    if (winner == 'comp') {
        compScore = compScore + 1;
    } else if (winner == 'player') {
        playerScore = playerScore + 1;
    } else {
        draw = draw + 1;
    }
    desplayScore();
}

function desplayScore() {
    player_score.innerHTML = playerScore;
    draw_score.innerHTML = draw;
    computer_score.innerHTML = compScore;
}

function bestOF(rounds) {
    let finalScore = { player: 0, comp: 0 }
    if (rounds % 2 === 0) {
        console.log(`Rounds Must Be Odd!!`);
        return false;
    }
    let toWin = Math.ceil(rounds / 2);
    let roundsWon = 0;
    while (noDraw) {
        if (playerScore === toWin || compScore === toWin) {
            finalScore = { player: playerScore, comp: compScore }
            noDraw = false;
        } else {
            console.log(paperRockScissors(Math.floor(Math.random() * 3)));
            roundsWon++;
        }
    }
    if (finalScore.player > finalScore.comp) {
        console.log(`PLAYER WINS IN ${roundsWon} Rounds!!!`);
    } else {
        console.log(`COMP WINS IN ${roundsWon} Rounds!!!`);
    }

}

function reset() {
    playerScore = 0;
    compScore = 0;
    draw = 0;
    noDraw = true;
    messageDIV.innerHTML = ""
    desplayScore();
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
init();