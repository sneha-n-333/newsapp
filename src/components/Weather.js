import React, { useEffect, useState } from 'react';
import { getGeolocation } from '../utils/geolocatin';
import { fetchWeather } from '../services/weatherService';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { lat, lon } = await getGeolocation();
        const data = await fetchWeather(lat, lon);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchData();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className='weather-container'>
      <div className='weather-content'>
      
      <h3>{weather.name}</h3>
      <h4>{weather.weather[0].description}</h4>
      <h5>{Math.round(weather.main.temp - 273.15)}°C</h5>
      </div>
    </div>
  );
};

export default Weather;