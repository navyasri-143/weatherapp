# Weather App 🌦️

A simple yet elegant weather application built with HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API

## Features ✨

- **Real-time weather data** for any city worldwide
- **Beautiful UI** with responsive design
- **Detailed weather information** including:
  - Current temperature
  - Weather conditions
  - Humidity
  - Wind speed
  - "Feels like" temperature
- **Search functionality** by city name
- **Error handling** for invalid city names

## Technologies Used 🛠️

- **Frontend**:
  - HTML5
  - CSS3 (with Flexbox and Grid)
  - JavaScript (ES6+)
- **API**:
  - [OpenWeatherMap API](https://openweathermap.org/api)

## Setup Instructions 🚀

### Prerequisites

- You'll need an API key from [OpenWeatherMap](https://openweathermap.org/) (free tier available)
- A modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Get your OpenWeatherMap API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/)
   - Get your API key from the account dashboard

3. Add your API key:
   - For frontend-only version: Replace `'your_api_key_here'` in `script.js`
   - For Express backend version: Create a `.env` file and add:
     ```
     OPENWEATHER_API_KEY=your_api_key_here
     ```

4. Run the application:
   - For frontend-only: Simply open `index.html` in your browser
   - For Express backend:
     ```bash
     npm install
     node server.js
     ```
     Then open `index.html` in your browser

## Project Structure 📂

```
weather-app/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # Frontend JavaScript
├── README.md           # This file`

## Customization 🎨

You can easily customize this app by:

1. Changing the color scheme in `styles.css` (modify the gradient values)
2. Adding more weather data by extending the API response handling
3. Changing the layout by adjusting the CSS Grid/Flexbox properties
4. Adding new features like:
   - 5-day forecast
   - Temperature unit toggle (Celsius/Fahrenheit)
   - Geolocation-based weather

## Contributing 🤝

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License 📄

This project is open source and available under the [MIT License](./LICENSE).

---

Enjoy checking the weather! ☀️🌧️❄️
