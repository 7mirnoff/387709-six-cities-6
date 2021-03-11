import {AuthorizationActionCreator} from "./authorization/action";
import {CitiesActionCreator} from "./cities/action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(CitiesActionCreator.setCitiesList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(AppRoute.FAVORITES)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(AppRoute.LOGIN)))
);
