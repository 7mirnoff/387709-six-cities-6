import {combineReducers} from 'redux';
import cities from './cities/reducer';
import authorization from './authorization/reducer';
import data from './data/reducer';

export const rootReducer = combineReducers({
  cities,
  authorization,
  data
});
