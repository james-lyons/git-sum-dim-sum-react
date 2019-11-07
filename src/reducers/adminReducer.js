function adminReducer(state = {
    users: null,
    restaurants: null,
    errors: null,
    message: null
}, action){
    switch(action.type) {
        case "FETCH_USERS_FULFILLED":
            return { ...state, users: action.payload };

        case "FETCH_USERS_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        case "FETCH_RESTAURANTS_FULFILLED":
                return { ...state, restaurants: action.payload };

        case "FETCH_RESTAURANTS_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        case "ADD_RESTAURANT_FULFILLED":
            return { ...state, message: action.payload.message }

        case "ADD_RESTAURANT_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        case "DELETE_RESTAURANT_FULFILLED":
            return { ...state }

        case "DELETE_RESTAURANT_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }
        
        default:
            return { ...state };
    };
};

export default adminReducer