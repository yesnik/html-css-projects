const timer = document.querySelector('.js-timer');
const btnStart = document.querySelector('.js-btn-start');
let elapsedTime = 0;
let timerId = null;

function updateTimer(time) {
    timer.innerHTML = getFormattedTime(time);
}

function startTimer() {
    if (timerId) {
        return;
    }

    timerId = setInterval(() => {
        elapsedTime++;
        updateTimer(elapsedTime);
    }, 1000);
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
}

btnStart.addEventListener('click', () => {
    startTimer();
});

const btnStop = document.querySelector('.js-btn-stop');

btnStop.addEventListener('click', () => {
    stopTimer();
});

const btnReset = document.querySelector('.js-btn-reset');

btnReset.addEventListener('click', () => {
    stopTimer();
    elapsedTime = 0;
    updateTimer(elapsedTime);
});

function getFormattedTime(time) {
    let minutes = String(Math.floor(time / 60)).padStart(2, '0');
    let seconds = String(time % 60).padStart(2, '0');

    return `${minutes}:${seconds}`;
}
