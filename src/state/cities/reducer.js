import {CitiesActionTypes} from './action';

import {offers} from '../../mocs/offers';

const initialState = {
  currentCity: `Paris`,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES_LIST:
      return {
        ...state,
        offers: action.payload
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
