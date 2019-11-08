import axios from 'axios';
import API_URL from '../constants';

const userRegister = (newUser) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/register`, newUser, { withCredentials: true })
            .then(res => {
                window.location.reload();
                dispatch({ type: "USER_REGISTER_FULFILLED", payload: res.data })
            })
            .catch(err => {
                dispatch({ type: "USER_REGISTER_REJECTED", payload: err.response.data })
            });
    };
};

const userLogin = (user) => {
    return dispatch => {
        return axios.post(`${ API_URL }/auth/login`, user, { withCredentials: true })
            .then(res => {
                window.location.reload();
                console.log(res.data.data);
                localStorage.setItem('uid', res.data.data._id);
                localStorage.setItem('user_role', res.data.data.role);
                dispatch({ type: "USER_LOGIN_FULFILLED", payload: res.data.data });
            })
            .catch(err => {
                dispatch({ type: "USER_LOGIN_REJECTED", payload: err.response.data })
            });
    };
}

const userLogout = () => {
    axios.post(`${ API_URL }/auth/logout`, { withCredentials: true })
        .then(res => {
            localStorage.removeItem('uid');
            localStorage.removeItem('user_role');
            window.location.reload();
            return { type: "USER_LOGOUT_FULFILLED", payload: res.data }
        })
        .catch(err => {
            return { type: "USER_LOGOUT_REJECTED", payload: err.response.data }
        });
};

const fetchUser = (currentUser) => {
    return dispatch => {
        return axios.get(`${ API_URL }/accounts/${ currentUser }`, { withCredentials: true })
            .then(res => {
                dispatch({ type: "FETCH_USER_FULFILLED", payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: err.response.data })
            });
    };
};

export {
    userRegister,
    userLogin,
    userLogout,
    fetchUser
};