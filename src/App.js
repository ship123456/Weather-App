import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      setLoading(false);
      setError("Please enter a city name.");
      return;
    }

    setError("");
    setWeather(null);
    setLocation(null);
    setLoading(true);

    try {
      const geoResponse = await fetch(
       `https://geocoding-api.open-meteo.com/v1/search?name=${city.trim()}&count=1`,
      );

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        setLoading(false);
        setError("City not found. Please try another city.");
        return;
      }

      const place = geoData.results[0];
      setLocation(place);

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      );

      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1>Weather App</h1>
        <p>Search for a city to view current weather details.</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">Loading weather...</p>}
        {weather && location && (
          <div className="weather-result">
            <h2>
              {location.name}, {location.country}
            </h2>

            <p className="temperature">{weather.temperature_2m}°C</p>

            <div className="weather-details">
              <div className="detail-card">
                <h4>Humidity</h4>
                <p>{weather.relative_humidity_2m}%</p>
              </div>

              <div className="detail-card">
                <h4>Wind Speed</h4>
                <p>{weather.wind_speed_10m} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
