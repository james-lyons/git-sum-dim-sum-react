function authReducer(state = {
    user: {
        name: "",
        email: "",
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
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    reviews: action.payload.reviews
                }   
            };
        case "USER_LOGIN_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }
        
        case "USER_LOGOUT_FULFILLED":
            return { ...state }
        
        case "USER_LOGOUT_REJECTED":
            return { ...state, errors: action.payload }

        case "FETCH_USER_FULFILLED":
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    reviews: action.payload.reviews
                }
            };

        case "FETCH_USER_REJECTED":
            return { ...state, errors: action.payload.errors }

        default:
            return { ...state };
    };
};

export default authReducer;