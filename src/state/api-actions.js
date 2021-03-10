import {AuthorizationActionCreator} from "./authorization/action";
import {CitiesActionCreator} from "./cities/action";
import {AuthorizationStatus} from "../utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(CitiesActionCreator.setCitiesList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(`/favorites`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(`/login`)))
);
