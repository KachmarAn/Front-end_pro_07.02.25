'use strict'

const N = +prompt("Введіть ціле число N: "); // Унарний плюс конвертує в число

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    } 
}

