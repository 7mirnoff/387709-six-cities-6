import browserHistory from "../../browser-history";
import {AuthorizationActionTypes} from "../authorization/action";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === AuthorizationActionTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
