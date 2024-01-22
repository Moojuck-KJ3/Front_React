import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducer';
import { getActions } from './actions/alertAction';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //
console.log(store.getState());

export default store;
