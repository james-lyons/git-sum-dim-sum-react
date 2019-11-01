function reviewReducer( state = {
    review_id: null,
    review_text: null,
    author: null,
    errprs: null,
    message: null
}, action) {
    switch(action.type){
        case "REVIEW_SUBMIT_FULFILLED":
            return state;

        case "REVIEW_SUBMIT_REJECTED":
            return {
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            };

        case "REVIEW_EDIT_FULFILLED":
                return state;
    
            case "REVIEW_EDIT_REJECTED":
                return {
                    ...state,
                    errors: action.payload.errors,
                    message: action.payload.message
                };

        case "REVIEW_DELETE_FULFILLED":
            return state;

        case "REVIEW_DELETE_REJECTED":
            return {
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            };

        default:
            return state;
    };
};

export default reviewReducer;