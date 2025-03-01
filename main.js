function averageOfNumbers(arr) {
    // Фільтруємо тільки числові значення
    let num = arr.filter(item => typeof item === 'number');

    // Якщо числових значень немає, повертаємо null або 0
    if (num.length === 0) return null;

    // Обчислюємо суму чисел
    let sum = num.reduce((acc, num) => acc + num, 0);

    // Обчислюємо середнє арифметичне
    return sum / num.length;
}

// Приклад використання
const mixedArray = [50, "hello", 70, null, 10, "rumba", 40, false];
console.log(averageOfNumbers(mixedArray)); // Виведе результат