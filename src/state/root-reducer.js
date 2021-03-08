import {combineReducers} from 'redux';
import cities from './cities/reducer';
import authorization from './authorization/reducer';

export const rootReducer = combineReducers({
  cities,
  authorization
});
