import axios from 'axios';
import API_URL from '../constants';

const fetchAllRestaurants = () => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_RESTAURANTS_FULFILLED", payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_RESTAURANTS_REJECTED", payload: err.response.data })
            });
    };
};

const fetchRestaurants = (name, city) => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/search`,
            { params: { name, city }, withCredentials: true })
                .then(res => {
                    dispatch({ type: "FETCH_RESTAURANTS_FULFILLED", payload: res.data.data })
                })
                .catch(err => {
                    dispatch({ type: "FETCH_RESTAURANTS_REJECTED", payload: err.response.data })
                });
    };
};

const fetchRestaurant = (restaurant_slug) => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/${ restaurant_slug }`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_RESTAURANT_FULFILLED", payload: res.data.data });
            })
            .catch(err => {
                dispatch({ type: "FETCH_RESTAURANT_REJECTED", payload: err.response.data })
            });
    };
};

export {
    fetchAllRestaurants,
    fetchRestaurants,
    fetchRestaurant
}