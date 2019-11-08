function authReducer(state = {
    user: {
        name: '',
        email: '',
        profile_image: '',
        reviews: [],
    },
    errors: null,
    messages: null
}, action){

    switch(action.type) {
        case "USER_REGISTER_FULFILLED":
            return {...state };
        
        case "USER_REGISTER_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        case "USER_LOGIN_FULFILLED":
            return { ...state, user: action.payload };

        case "USER_LOGIN_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }
        
        case "USER_LOGOUT_FULFILLED":
            return { ...state }
        
        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload }

        case "FETCH_USER_FULFILLED":
            return { ...state, user: action.payload };

        case "FETCH_USER_REJECTED":
            return { ...state, errors: action.payload.errors }

        default:
            return { ...state };
    };
};

export default authReducer;