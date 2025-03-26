'use strict';

let savedLink = '';

function saveLink() {
    let userLink = prompt("Введіть URL-адресу:");
    if (userLink) {
        // Перевіряємо, чи посилання починається з http або https
        if (!userLink.startsWith("http://") && !userLink.startsWith("https://")) {
            alert("Некоректне посилання! Додано 'https://' на початок.");
            userLink = "https://" + userLink;
        }
        savedLink = userLink;
        alert("Посилання збережено!");
    }
}

function goToLink() {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Спочатку введіть посилання!");
    }
}