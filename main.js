'use strict';

const apiKey = '4529e9ae06dd8e8b52556f628137f5ab'; // Замініть на свій API ключ
const city = 'Dnipro'; // Можете змінити на потрібне місто
const weatherIconElement = document.getElementById('weather-icon');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const detailsElement = document.getElementById('details');
const updateButton = document.getElementById('update-weather');

async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`);
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error('Помилка отримання даних про погоду:', error);
        cityElement.textContent = 'Помилка завантаження погоди';
    }
}

function updateWeatherUI(data) {
    const { name, main, weather, wind } = data;
    const temperature = Math.round(main.temp);
    const description = weather[0].description;
    const iconCode = weather[0].icon;
    const humidity = main.humidity;
    const pressure = main.pressure;
    const windSpeed = wind.speed;

    cityElement.textContent = name;
    temperatureElement.textContent = `${temperature}°C`;
    descriptionElement.textContent = description;
    detailsElement.textContent = `Вологість: ${humidity}%, Тиск: ${pressure} гПа, Вітер: ${windSpeed} м/с`;
    weatherIconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">`;
}

updateButton.addEventListener('click', fetchWeatherData);

fetchWeatherData();