import {combineReducers} from 'redux';
import cities from './cities/reducer';

export const rootReducer = combineReducers({
  cities
});
