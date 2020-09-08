import React, { createContext, useReducer } from 'react';
import WeatherReducer from './WeatherReducer';
import getCurrentPosition from '../../utils/geoLocation';
import formatWeather from '../../utils/formatWeather';
import axios from 'axios';


//Initial State
const initialState = {
   quote: null, 
   weather: null,
    error: null,
    loading: true
}


//create context
const WeatherContext = createContext(initialState);

//ProviderComponent
const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);


    //Action
    const getWeather = async () => {
      try {
        const {coords} = await getCurrentPosition();
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=38e50188c2725443b0bfd62dc751fa5f&units=imperial`
        const res = await axios.get(url);
        const weather = formatWeather(res.data);
    
        dispatch({
          type: 'GET_WEATHER', 
          payload: weather
        });

      } catch (err) {
        
        dispatch({
          type: 'LOCATION_ERROR', 
          payload: err.message
        });
      }
    }

    const getQuote = async () => {
      try {
        const options = {headers: {
          "X-TheySaidSo-Api-Secret": "WBSCODINGSCHOOL2020",
          "Content-type": "application/json"
        }}
        const res = await axios.get("https://quotes.rest/qod", options);
        console.log(res.data.contents.quotes[0]);

      dispatch({
          type: 'GET_QUOTE', 
          payload: res.data.contents.quotes[0]
        });

      } catch (err) {
        console.log(err);
       /* dispatch({
          type: 'LOCATION_ERROR', 
          payload: err.message
        });*/
      }
    }


    return (
        <WeatherContext.Provider value={{
            weather: state.weather,
            quote: state.quote,
            error: state.error,
            loading: state.loading,
            getQuote,
            getWeather,
        }}>
          {children}
        </WeatherContext.Provider>);
  }
  

export { WeatherContext, WeatherProvider };