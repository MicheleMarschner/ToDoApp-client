import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-rainbow-components';
import {
  FaThermometerHalf,
  FaMapMarker,
  FaCloud,
  FaSun,
  FaCloudRain,
} from 'react-icons/fa';
import getCurrentPosition from '../utils/geoLocation';
import formatWeather from '../utils/formatWeather';
import axios from 'axios';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const { coords } = await getCurrentPosition();
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=38e50188c2725443b0bfd62dc751fa5f&units=imperial`;
      const res = await axios.get(url);
      const data = formatWeather(res.data);
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const weatherIcon = weather => {
    switch (weather) {
      case 'Sun':
        return <FaSun className='fa-fw mr-2 primary' />;
      case 'Rain':
        return <FaCloudRain className='fa-fw mr-2 primary' />;
      default:
        return <FaCloud className='fa-fw mr-2 primary' />;
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='card mt-5'>
          <div className='list-group list-group-flush medium'>
            <div className='list-group-item list-group-item-action'>
              <FaMapMarker className='fa-fw mr-2 primary' /> {weather.location}
            </div>
            <div className='list-group-item list-group-item-action'>
              <FaThermometerHalf className='fa-fw mr-2 primary' />{' '}
              {weather.temperature}
            </div>
            <div className='list-group-item list-group-item-action'>
              {weatherIcon(weather.description)} {weather.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
