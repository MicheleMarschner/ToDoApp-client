export default (state, action) => {
  switch (action.type) {
    case "GET_LOCATION":
      return {
        ...state,
        loading: false,
        data: action.payload,
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
