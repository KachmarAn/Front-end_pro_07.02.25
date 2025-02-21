// Чи всі цифри тризначного числа однакові?
let number = prompt ("Введіть тризначне число")

// Виділяємо цифри
let hundreds = (number / 100) | 0; // Сотні
let tens = ((number % 100) / 10) | 0; // Десятки
let ones = number % 10; // Одиниці

// Перевірка
if (hundreds === tens && tens === ones) {
  alert("Усі цифри числа однакові.");
} else if (hundreds === tens || hundreds === ones || tens === ones) {
  alert("Є однакові цифри.");
} else {
  alert("Усі цифри різні.");
}