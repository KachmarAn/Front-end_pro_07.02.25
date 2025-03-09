'use strict';
function askNum() {
    let num1;
    let att = 10;

    for (let i = 0; i < att; i++) {
        num1 = prompt("Введіть число більше 100:");

        // Перевіряємо, чи це число і чи воно більше 100
        if (num1 !== null && !isNaN(num1) && Number(num1) > 100) {
            console.log("Останнє введене число:", num1);
            return;
        }
    }
    console.log("Ліміт спроб вичерпано. Останнє введене число:", num1);
}

askNum();
