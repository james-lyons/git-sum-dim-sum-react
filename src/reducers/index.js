import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import reviewReducer from './reviewReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    authReducer,
    restaurantReducer,
    reviewReducer,
    adminReducer
});