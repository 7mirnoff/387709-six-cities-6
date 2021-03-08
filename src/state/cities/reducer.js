import {CitiesActionTypes} from './action';

const initialState = {
  currentCity: `Paris`,
  offers: [],
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES_LIST:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case CitiesActionTypes.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
