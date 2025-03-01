'use strict';
function removeElement(arr, item) {
    return arr.filter(element => element !== item);
}

const arr = [1, 3, 4, 6, 2, 5, 7, 4]; // Додаємо ще один 4 для перевірки
const newArr = removeElement(arr, 4);

console.log(newArr); // [1, 3, 6, 2, 5, 7]
console.log(arr); // [1, 3, 4, 6, 2, 5, 7, 4] (оригінальний масив не змінюється)
