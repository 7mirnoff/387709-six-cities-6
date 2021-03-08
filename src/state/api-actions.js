import {AuthorizationActionTypes} from "./authorization/action";
import {CitiesActionCreator} from "./cities/action";
import {AuthorizationStatus} from "../utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(CitiesActionCreator.setCitiesList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(AuthorizationActionTypes.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(AuthorizationActionTypes.requireAuthorization(AuthorizationStatus.AUTH)))
);
