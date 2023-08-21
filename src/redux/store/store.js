import {createStore, combineReducers} from 'redux';
import userReducer from '../reducers/userReducer';
const rootReducer = combineReducers({user: userReducer});
const Store = () => {
  return createStore(rootReducer);
};
export default Store;
