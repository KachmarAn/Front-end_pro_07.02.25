// Запитуємо рік народження
let Year = prompt("Введіть ваш рік народження:");
if (Year === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  // Обчислюємо вік
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(Year);

  // Запитуємо місто проживання
  let city = prompt("В якому місті Ви живете?");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    city = city.trim();
    let cityMessage;

    switch (city.toLowerCase()) {
      case "київ":
        cityMessage = "Ти живеш у столиці України.";
        break;
      case "вашингтон":
        cityMessage = "Ти живеш у столиці США.";
        break;
      case "лондон":
        cityMessage = "Ти живеш у столиці Великобританії.";
        break;
      default:
        cityMessage = `Ти живеш у місті ${city}.`;
    }

    // Запитуємо улюблений вид спорту
    let sport = prompt("Ваш улюблений вид спорту?");
    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      sport = sport.trim();
      let sportMessage;

      switch (sport.toLowerCase()) {
        case "футбол":
          sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
          break;
        case "баскетбол":
          sportMessage = "Круто! Хочеш стати Майклом Джорданом?";
          break;
        case "теніс":
          sportMessage = "Круто! Хочеш стати Роджером Федерером?";
          break;
        default:
          sportMessage = `Ваш улюблений вид спорту: ${sport}.`;
      }

      // Виводимо все в одному повідомленні
      alert(`Ваша інформація:
Ваш вік: ${age}
${cityMessage}
${sportMessage}`);
    }
  }
}