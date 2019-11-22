const answerDiv = document.getElementById('answer');
const eight = document.getElementById('eight');
const liquid = document.getElementById('liquid')
const seconds = 5000;
let timeoutHandle;
let timerStarted = false;

function eightBall() {
    let answerNum = Math.floor(Math.random() * 20);
    let answres = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    eight.style.display = "none";
    liquid.style.display = "block";
    answerDiv.innerHTML = answres[answerNum];
    if(!timerStarted){
        timerStarted = true;
        timeoutHandle = setTimeout(reset, seconds);
    } else{
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(reset, seconds);
    }
}

function reset() {
    timerStarted = false;
    eight.style.display = "block";
    liquid.style.display = "none";
}