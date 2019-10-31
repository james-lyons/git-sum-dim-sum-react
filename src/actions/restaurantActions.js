import axios from 'axios';
import API_URL from '../constants';

const fetchAllRestaurants = () => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/`, { withCredentials: true })
            .then(res => {
                console.log(res);
                dispatch({ type: "FETCH_RESTAURANTS_FULFILLED", payload: res.data.data})
            })
            .catch(err => {
                console.log(err.data);
                dispatch({ type: "FETCH_RESTAURANTS_REJECTED", payload: err.data})
            });
    };
};

const fetchRestaurants = (name, city) => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/search`,
            { params: { name, city }, withCredentials: true })
                .then(res => {
                    console.log(res);
                    dispatch({ type: "FETCH_RESTAURANTS_FULFILLED", payload: res.data.data})
                })
                .catch(err => {
                    console.log(err.data);
                    dispatch({ type: "FETCH_RESTAURANTS_REJECTED", payload: err.data})
                });
    };
};

const fetchRestaurant = (restaurant) => {
    return dispatch => {
        return axios.get(`${ API_URL }/restaurants/${ restaurant }`, { withCredentials: true })
            .then(res => {
                console.log(res);
                dispatch({ type: "FETCH_RESTAURANT_FULFILLED", payload: res.data});
            })
            .catch(err => {
                console.log(err.data);
                dispatch({ type: "FETCH_RESTAURANT_REJECTED", payload: err.data})
            });
    };
};

export {
    fetchAllRestaurants,
    fetchRestaurants,
    fetchRestaurant
}