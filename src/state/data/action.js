export const DataActionTypes = {
  SET_DATA_LOADED: `SET_DATA_LOADED`
};

export const DataActionCreator = {
  setDataLoaded: (isLoad) => ({
    type: DataActionTypes.SET_DATA_LOADED,
    payload: isLoad,
  })
};
