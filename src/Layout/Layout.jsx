
import React from "react";
import ToDoContainer from "../Components/ToDoContainer.jsx";
import Header from "../Components/Header.jsx";
import Weather from "../Components/Weather.jsx";
import { WeatherProvider } from "../Context/Weather/WeatherState";

export default function Layout() {
  return (
    <div className="row bg-light vh-100">
      <div className="border col-3">
        <Header />
        <WeatherProvider>
          <Weather />
        </WeatherProvider>
      </div>
      <div className="border col-9">
        <ToDoContainer />
      </div>
    </div>
  );
}
