import { combineReducers } from 'redux';
import Rooms from './rooms';

const reducers = combineReducers({
      rooms: Rooms
});

export default reducers;