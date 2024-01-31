import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import friendsReducer from './reducers/friendsReducer';
import chatReducer from './reducers/chatReducer';
import roomReducer from './reducers/roomReducer';
import modeZeroReducer from './reducers/modeZeroReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chats: chatReducer,
  room: roomReducer,
  modeOne: modeZeroReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
