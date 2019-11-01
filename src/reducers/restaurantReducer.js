function restaurantReducer( state = {
    restaurants: null,
    restaurant: {
        name: null,
        address: null,
        phone: null,
        hours: null,
        menuLink: null,
        reviews: [],
        image: null,
    },
    errors: null,
    message: null,
}, action) {
    
    switch(action.type) {
        case "FETCH_RESTAURANTS_FULFILLED":
            return { ...state, restaurants: action.payload }

        case "FETCH_RESTAURANTS_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        case "FETCH_RESTAURANT_FULFILLED":
            return { ...state, restaurant: action.payload }

        case "FETCH_RESTAURANT_REJECTED":
            return { ...state, errors: action.payload.errors, message: action.payload.message }

        default:
            return state;
    };
};

export default restaurantReducer;