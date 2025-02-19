"use strict";

// Введіть п'ятизначне число
let number = parseInt(prompt("Введіть п'ятизначне число:"));

// Отримуємо цифри
let digit1 = number / 10000 - (number / 10000) % 1;
let digit2 = (number % 10000) / 1000 - ((number % 10000) / 1000) % 1;
let digit3 = (number % 1000) / 100 - ((number % 1000) / 100) % 1;
let digit4 = (number % 100) / 10 - ((number % 100) / 10) % 1;
let digit5 = number % 10;

alert(`Digits: ${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);



let number1 = prompt("Введіть тризначне число:");
console.log("Зворотній порядок:", number1[2], number1[1], number1[0]);
