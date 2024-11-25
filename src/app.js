const bells = new Audio('assets/bell.wav');
const startBtn = document.querySelector('.btn-start')
const message = document.getElementById('message');
const minuteSpan = document.querySelector('.minutes');
const secondSpan = document.querySelector('.seconds');

let workSession = true;
let totalSeconds = 25 * 60;
let myInterval;

const updateTimer = () => {
    const minutesLeft = Math.floor(totalSeconds/60);
    const secondsLeft = totalSeconds % 60;

    secondSpan.textContent = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;
    minuteSpan.textContent = `${minutesLeft}`;

    totalSeconds--;

    if (totalSeconds < 0) {
        bells.play();

        if (workSession) {
            totalSeconds = 5 * 60;
            workSession = false;
            message.textContent = "take a break, you're doing good"
        } else {
            totalSeconds = 25 * 60;
            workSession = true;
            message.textContent = "keep up the work"
        }

        clearInterval(myInterval);
        myInterval = setInterval(updateTimer, 1000);

    }
};

startBtn.addEventListener('click', () => {
    if (!myInterval) {
        myInterval = setInterval(updateTimer, 1000);
        message.textContent = "you got this! stay focused";
        startBtn.textContent = "reset";
    } else {
        clearInterval(myInterval);
        myInterval = null;
        totalSeconds = 25 * 60;
        workSession = true;
        minuteSpan.textContent = "25";
        secondSpan.textContent = "00";
        message.textContent = "press start to be productive";
        startBtn.textContent = "start";
    }
});