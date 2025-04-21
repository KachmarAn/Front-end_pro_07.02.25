'use strict';

// Початковий час таймера в секундах
let initialSeconds = 87; // Еквівалентно 01:27 (60 + 27)

let timerDisplay = document.getElementById("timer");
let timerInterval;
let totalSeconds;

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

function startTimer(seconds) {
    totalSeconds = seconds;
    updateTimer(); // Одразу відобразити початковий час
    timerInterval = setInterval(updateTimer, 1000);
}

// Запуск таймера з заданої кількості секунд
startTimer(initialSeconds);