function call_Api(){
    var out = document.querySelector("#output");
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
    .then(response = reponse.json())
    .then(data => {
        // Extract the desired data from the response
        const forecastData = data.list[0]; // Get the first forecast data point
        const temperature = forecastData.main.temp;
        const humidity = forecastData.main.humidity;
        const windSpeed = forecastData.wind.speed;
        const description = forecastData.weather[0].description;
    
        // Create HTML elements to display the data
        const weatherDataDiv = document.getElementById('weather-data');
        weatherDataDiv.innerHTML = `
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Description: ${description}</p>`;
      })
      .catch(error => console.error('Error:', error));
}

