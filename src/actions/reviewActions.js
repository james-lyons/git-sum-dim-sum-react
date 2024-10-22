import axios from 'axios';
import API_URL from '../constants';

const submitReview = (reviewText, restaurant_id, restaurant_name) => {
    return dispatch => {
        return axios.post(`${ API_URL }/reviews`,
        { reviewText, restaurant_id, restaurant_name }, { withCredentials: true })
            .then(res => {
                dispatch({ type: 'REVIEW_SUBMIT_FULFILLED'});
                window.location.reload();
            })
            .catch(err => {
                dispatch({ type: 'REVIEW_SUBMIT_REJECTED', payload: err.response.data })
            });
    };
};

const editReview = (review_id, reviewText) => {
    return dispatch => {
        return axios.put(`${ API_URL }/reviews/${ review_id }`,
        { reviewText }, { withCredentials: true })
            .then(res => {
                dispatch({ type: 'REVIEW_EDIT_FULFILLED'});
            })
            .catch(err => {
                dispatch({ type: 'REVIEW_EDIT_REJECTED', payload: err.response.data })
            });
    };
}

const deleteReview = (review_id) => {
    return dispatch => {
        return axios.delete(`${ API_URL }/reviews/${ review_id }`,
        { withCredentials: true })
            .then(res => {
                dispatch({ type: 'REVIEW_EDIT_FULFILLED'});
                window.location.reload();
            })
            .catch(err => {
                dispatch({ type: 'REVIEW_EDIT_REJECTED', payload: err.response.data })
                console.log(err.response.data)
            });
    };
}

export {
    submitReview,
    editReview,
    deleteReview
}