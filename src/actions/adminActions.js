import axios from 'axios';
import API_URL from '../constants';

const fetchUsers = () => {
    return dispatch => {
        axios.get(`${ API_URL }/admin/users`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_USERS_FULFILLED", payload: res.data.data });
            })
            .catch(err => {
                dispatch({ type: "FETCH_USERS_REJECTED", payload: err.response.data });
            });
    };
};

const deleteUser = (user_id) => {
    return dispatch => {
        axios.delete(`${ API_URL }/admin/users/${ user_id }`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "DELETE_USER_FULFILLED" });
                window.location.reload();
            })
            .catch(err => {
                dispatch({ type: "DELETE_USER_REJECTED", payload: err.response.data })
            });
    };
};

const fetchRestaurants = () => {
    return dispatch => {
        axios.get(`${ API_URL }/admin/restaurants`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_RESTAURANTS_FULFILLED", payload: res.data.data });
            })
            .catch(err => {
                dispatch({ type: "FETCH_RESTAURANTS_REJECTED", payload: err.response.data });
            });
    };
};

const addRestaurant = (newRestaurant) => {
    return dispatch => {
        return axios.post(`${ API_URL }/admin/restaurants/`, newRestaurant,
            { withCredentials: true })
                .then(res => {
                    dispatch({ type: "ADD_RESTAURANT_FULFILLED", payload: res.data })
                })
                .catch(err => {
                    dispatch({ type: "ADD_RESTAURANT_REJECTED", payload: err.response.data })
                });
    };
};

const deleteRestaurant = (restaurant_id) => {
    return dispatch => {
        axios.delete(`${ API_URL }/admin/restaurants/${ restaurant_id }`,
            { withCredentials: true })
                .then(res => {
                    dispatch({ type: "DELETE_RESTAURANT_FULFILLED" })
                    window.location.reload();
                })
                .catch(err => {
                    dispatch({ type: "DELETE_RESTAURANT_REJECTED", payload: err.response.data })
                });
    };
};

export {
    fetchUsers,
    deleteUser,
    fetchRestaurants,
    addRestaurant,
    deleteRestaurant,
};