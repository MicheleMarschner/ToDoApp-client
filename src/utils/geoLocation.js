//fetches the location to pass the input to the weather Api
function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export default getCurrentPosition;
