import {DataActionTypes} from './action';

const initialState = {
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.SET_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
