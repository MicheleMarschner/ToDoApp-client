function formatWeather(data) {
  let temperature =
    (((parseInt(data.main.temp) - 32) * 5) / 9).toFixed(2) + ' °C';
  let location =
    data.name + ' (' + data.coord.lat + '°, ' + data.coord.lon + '°)';
  let description = data.weather[0].main;
  return {
    temperature,
    location,
    description,
  };
}

export default formatWeather;
