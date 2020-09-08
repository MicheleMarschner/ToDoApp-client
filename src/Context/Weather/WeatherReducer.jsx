export default (state, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
      case "GET_QUOTE":
        return {
          ...state,
          loading: false,
          quote: action.payload,
        };
    case "LOCATION_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
