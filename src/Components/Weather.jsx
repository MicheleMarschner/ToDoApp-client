import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-rainbow-components";
import { WeatherContext } from "../Context/Weather/WeatherState";
import { 
    FaThermometerHalf, FaMapMarker, FaCloud, FaSun, FaCloudRain } from "react-icons/fa";

export default function Weather() {
  const { getLocation, loading, data } = useContext(WeatherContext);
    console.log(data);
  useEffect(() => {
    getLocation();
  }, []);

  const weatherIcon = (weather) => {
      switch (weather) {
        case "Sun": return <FaSun className="fa-fw mr-2 primary"/>;
        case "Rain": return <FaCloudRain className="fa-fw mr-2 primary"/>;
        default: return <FaCloud className="fa-fw mr-2 primary"/>;
      }
     
      
  }

  return (
    <div className="container container-right overflow-auto h-100 py-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="card">
          <div className="list-group list-group-flush medium">
            <div className="list-group-item list-group-item-action">
                <FaMapMarker className="fa-fw mr-2 primary"/> {data.location}
            </div>
            <div className="list-group-item list-group-item-action">
            <FaThermometerHalf className="fa-fw mr-2 primary"/> {data.temperature}
            </div>
            <div className="list-group-item list-group-item-action">
            {weatherIcon(data.description)} {data.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
