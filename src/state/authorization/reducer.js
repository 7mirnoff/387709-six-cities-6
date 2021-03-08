import {AuthorizationActionTypes} from './action';
import {AuthorizationStatus} from '../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthorizationActionTypes.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
