import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    authReducer,
    restaurantReducer,
    reviewReducer
});