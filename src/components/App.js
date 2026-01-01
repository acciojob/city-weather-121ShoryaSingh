import React, { useState } from 'react';
import './../styles/App.css';

const API_KEY = 'f32c8eb706b47d5b00ddbef90c7c0325';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('');

  const handleWeatherData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleWeatherData}>
        <input
          id="search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main?.temp}K</p>
          <p>Weather: {weatherData.weather?.[0]?.description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default App;
