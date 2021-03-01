export const CitiesActionTypes = {
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_CURRENT_CITY: `SET_CURRENT_CITY`
};

export const CitiesActionCreator = {
  setCitiesList: (payload) => ({
    type: CitiesActionTypes.SET_CITIES_LIST,
    payload,
  }),
  setCurrentCity: (payload) => ({
    type: CitiesActionTypes.SET_CURRENT_CITY,
    payload
  })
};
