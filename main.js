'use strict';

let startTime = "01:27";

let timerDisplay = document.getElementById("timer");
let timerInterval;

function startTimer(startTimeStr) {
    let parts = startTimeStr.split(":");
    let minutes = parseInt(parts[0]);
    let seconds = parseInt(parts[1]);
    let totalSeconds = minutes * 60 + seconds;

    function updateTimer() {
        if (totalSeconds < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Час вийшов!";
            return;
        }

        let currentMinutes = Math.floor(totalSeconds / 60);
        let currentSeconds = totalSeconds % 60;

        timerDisplay.textContent = `${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;
        totalSeconds--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

startTimer(startTime);