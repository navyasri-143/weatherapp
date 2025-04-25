// API key - replace with your own from OpenWeatherMap
const API_KEY = 'c12626ec461be946d685f1b0f08fb3a3';

// DOM elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherContainer = document.querySelector('.weather-container');
const cityName = document.getElementById('city-name');
const dateElement = document.getElementById('date');
const tempElement = document.getElementById('temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const feelsLikeElement = document.getElementById('feels-like');

// Current date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = today.toLocaleDateString('en-US', options);

// Fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    }
}

// Display weather data
function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    
    cityName.textContent = name;
    tempElement.textContent = `${Math.round(temp)}°C`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherDesc.textContent = description;
    humidityElement.textContent = `${humidity}%`;
    windSpeedElement.textContent = `${Math.round(speed * 3.6)} km/h`;
    feelsLikeElement.textContent = `${Math.round(feels_like)}°C`;
    
    weatherContainer.style.display = 'block';
}

// Show error message
function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    
    // Remove previous error if exists
    const existingError = document.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }
    
    weatherContainer.after(errorElement);
    errorElement.style.display = 'block';
    weatherContainer.style.display = 'none';
}

// Event listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

cityInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }
});

// Fetch weather for default city on page load
fetchWeather('London');