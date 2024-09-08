document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDetails = `
                    <div class="weather-details">
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    </div>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherDetails;
            } else {
                document.getElementById('weatherInfo').innerHTML = <p>City not found!</p>;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weatherInfo').innerHTML = <p>Failed to fetch data</p>;
        });
});
    
     
