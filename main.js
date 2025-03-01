function removeChars(str, charsToRemove) {
    return str.split('').filter(char => !charsToRemove.includes(char)).join('');
}

// Отримуємо вхідні дані від користувача
const inputString = prompt("Введіть рядок:");
const charsToRemove = prompt("Введіть символи для видалення без пробілів:").split('');

// Викликаємо функцію та виводимо результат
const result = removeChars(inputString, charsToRemove);
console.log("Результат:", result);
