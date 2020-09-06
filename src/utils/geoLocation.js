function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}


export default getCurrentPosition;