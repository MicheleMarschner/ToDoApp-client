import React, { createContext, useReducer } from 'react';
import WeatherReducer from './WeatherReducer';
import getCurrentPosition from '../../utils/geoLocation';
import formatWeather from '../../utils/formatWeather';
import axios from 'axios';


//Initial State
const initialState = {
   coords: [], 
    error: null,
    loading: true
}


//create context
const WeatherContext = createContext(initialState);

//ProviderComponent
const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);


    //Action
    const getLocation = async () => {
      try {
        const {coords} = await getCurrentPosition();
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
        const res = await axios.get(url);
        const data = formatWeather(res.data);
    
        dispatch({
          type: 'GET_LOCATION', 
          payload: data
        });

      } catch (err) {
        
        dispatch({
          type: 'LOCATION_ERROR', 
          payload: err.message
        });
      }
    }


    return (
        <WeatherContext.Provider value={{
            data: state.data,
            error: state.error,
            loading: state.loading,
            getLocation,
        }}>
          {children}
        </WeatherContext.Provider>);
  }
  

export { WeatherContext, WeatherProvider };