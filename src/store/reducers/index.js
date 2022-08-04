import { combineReducers } from 'redux';
import { userReducer } from './userReducers';

const reducers = combineReducers({
  Users: userReducer,
});

export default reducers;
